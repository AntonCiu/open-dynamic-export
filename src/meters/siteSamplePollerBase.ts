import { type Logger } from 'pino';
import { pinoLogger } from '../helpers/logger.js';
import EventEmitter from 'node:events';
import { type SiteSample } from './siteSample.js';
import { tryCatchResult } from '../helpers/result.js';
import { writeLatency } from '../helpers/influxdb.js';
import { withRetry } from '../helpers/withRetry.js';

export abstract class SiteSamplePollerBase extends EventEmitter<{
    data: [
        {
            siteSample: SiteSample;
        },
    ];
}> {
    protected logger: Logger;
    private pollingIntervalMs;
    private pollingTimer: NodeJS.Timeout | null = null;
    private siteSampleCache: SiteSample | null = null;
    private meterPollerName: string;
    protected readonly abortController: AbortController;

    constructor({
        name,
        pollingIntervalMs,
    }: {
        name: string;
        // how frequently at most to poll the data
        pollingIntervalMs: number;
    }) {
        super();

        this.pollingIntervalMs = pollingIntervalMs;
        this.logger = pinoLogger.child({
            module: 'SiteSamplePollerBase',
            meterPollerName: name,
        });
        this.meterPollerName = name;
        this.abortController = new AbortController();
    }

    public destroy() {
        this.abortController.abort();

        if (this.pollingTimer) {
            clearTimeout(this.pollingTimer);
        }

        this.onDestroy();
    }

    abstract getSiteSample(): Promise<SiteSample>;

    abstract onDestroy(): void;

    get getSiteSampleCache(): SiteSample | null {
        return this.siteSampleCache;
    }

    protected async startPolling() {
        const start = performance.now();

        const siteSample = await tryCatchResult(() =>
            withRetry(() => this.getSiteSample(), {
                attempts: 3,
                functionName: 'getSiteSample',
                delayMilliseconds: 100,
                abortController: this.abortController,
            }),
        );

        if (this.abortController.signal.aborted) {
            return;
        }

        const end = performance.now();
        const duration = end - start;

        writeLatency({
            field: 'siteSamplePoller',
            duration,
            tags: {
                meterPollerName: this.meterPollerName,
            },
        });

        if (siteSample.success) {
            this.siteSampleCache = siteSample.value;

            this.logger.trace({ duration, siteSample }, 'polled site sample');
        } else {
            this.logger.error(siteSample.error, 'Error polling site sample');
        }

        const delay = Math.max(this.pollingIntervalMs - duration, 0);

        this.pollingTimer = setTimeout(() => {
            void this.startPolling();
        }, delay);

        if (siteSample.success) {
            this.emit('data', {
                siteSample: siteSample.value,
            });
        }
    }

    /**
     * Logs Modbus request and response packets for debugging purposes.
     * @param request The Modbus request packet.
     * @param response The Modbus response packet.
     */
    protected logModbusPacket(request: Buffer, response: Buffer) {
        this.logger.debug(
            {
                request: request.toString('hex'),
                response: response.toString('hex'),
            },
            'Modbus packet debug',
        );
    }
}
