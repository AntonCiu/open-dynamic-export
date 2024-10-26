import ModbusRTU from 'modbus-serial';
import { logger as pinoLogger } from '../../helpers/logger.js';
import type { Logger } from 'pino';
import type { ModbusSchema } from '../../helpers/config.js';
import { Mutex } from 'async-mutex';

const connectionTimeoutMs = 10_000;

export type ModbusRegisterType = 'holding' | 'input';

export class ModbusConnection {
    private readonly client: ModbusRTU.default;
    public readonly config: ModbusSchema['connection'];
    public readonly logger: Logger;
    private readonly mutex = new Mutex();

    private state:
        | { type: 'connected' }
        | { type: 'connecting'; connectPromise: Promise<void> }
        | { type: 'disconnected' } = { type: 'disconnected' };

    constructor(config: ModbusSchema['connection']) {
        this.client = new ModbusRTU.default();
        this.config = config;
        this.logger = pinoLogger.child({
            module: 'ModbusConnection',
            config,
        });

        this.client.on('close', () => {
            this.state = { type: 'disconnected' };

            this.logger.error(`Modbus client closed`);
        });

        // This is never observed to be triggered
        this.client.on('error', (error) => {
            this.state = { type: 'disconnected' };

            this.logger.error(error, `Modbus client error`);
        });

        this.connect().catch(() => {
            // no op
        });
    }

    async connect() {
        switch (this.state.type) {
            case 'connected':
                return;
            case 'connecting':
                return this.state.connectPromise;
            case 'disconnected': {
                const connectPromise = (async () => {
                    try {
                        this.logger.info(`Modbus client connecting`);

                        switch (this.config.type) {
                            case 'tcp':
                                await this.client.connectTCP(this.config.ip, {
                                    port: this.config.port,
                                    // timeout for connection
                                    timeout: connectionTimeoutMs,
                                });
                                break;
                            case 'rtu':
                                await this.client.connectRTUBuffered(
                                    this.config.path,
                                    {
                                        baudRate: this.config.baudRate,
                                    },
                                );
                                break;
                        }

                        // timeout for requests
                        this.client.setTimeout(connectionTimeoutMs);

                        this.logger.info(`Modbus client connected`);

                        this.state = { type: 'connected' };
                    } catch (error) {
                        this.logger.error(
                            error,
                            `Modbus client error connecting`,
                        );

                        this.state = { type: 'disconnected' };

                        throw error;
                    }
                })();

                this.state = { type: 'connecting', connectPromise };

                return connectPromise;
            }
        }
    }

    readRegisters({
        type,
        unitId,
        start,
        length,
    }: {
        type: ModbusRegisterType;
        unitId: number;
        start: number;
        length: number;
    }) {
        return this.mutex.runExclusive(async () => {
            await this.connect();

            this.client.setID(unitId);

            switch (type) {
                case 'holding':
                    return this.client.readHoldingRegisters(start, length);
                case 'input':
                    return this.client.readInputRegisters(start, length);
            }
        });
    }

    writeRegisters({
        type,
        unitId,
        start,
        data,
    }: {
        type: ModbusRegisterType;
        unitId: number;
        start: number;
        data: number[];
    }) {
        return this.mutex.runExclusive(async () => {
            await this.connect();

            this.client.setID(unitId);

            switch (type) {
                case 'holding':
                    return this.client.writeRegisters(start, data);
                case 'input':
                    throw new Error(`Cannot write to input registers`);
            }
        });
    }

    close() {
        this.client.close(() => {});
    }
}
