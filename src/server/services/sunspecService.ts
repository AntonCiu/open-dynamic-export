import 'dotenv/config';
import { getConfig } from '../../helpers/config.js';
import { InverterSunSpecConnection } from '../../connections/sunspec/connection/inverter.js';
import { MeterSunSpecConnection } from '../../connections/sunspec/connection/meter.js';
import { getInverterMetrics_int, getInverterMetrics_float } from '../../connections/sunspec/helpers/inverterMetrics.js';
import { getMeterMetrics_int, getMeterMetrics_float } from '../../connections/sunspec/helpers/meterMetrics.js';
import { getNameplateMetrics } from '../../connections/sunspec/helpers/nameplateMetrics.js';
import { getSettingsMetrics } from '../../connections/sunspec/helpers/settingsMetrics.js';
import { getStatusMetrics } from '../../connections/sunspec/helpers/statusMetrics.js';
import { MeterModel_float, MeterModel_int } from '../../connections/sunspec/models/meter.js';
import { InverterModel_float, InverterModel_int } from '../../connections/sunspec/models/inverter.js';

function isMeterModelFloat(meter: MeterModel_int | MeterModel_float): meter is MeterModel_float {
    return [211, 212, 213, 214].includes(meter.ID);
}

function isInverterModelFloat(inverter: InverterModel_int | InverterModel_float): inverter is InverterModel_float {
    return [112, 111, 113].includes(inverter.ID); // Replace with actual float model IDs
}

export async function getSunSpecData() {
    const config = getConfig();

    const invertersConnections = config.inverters
        .filter((inverter) => inverter.type === 'sunspec')
        .map((inverter) => new InverterSunSpecConnection(inverter));

    const invertersData = await Promise.all(
        invertersConnections.map(async (inverter) => {
            const common = await inverter.getCommonModel();
            const inverterModel = await inverter.getInverterModel();
            const nameplate = await inverter.getNameplateModel();
            const settings = await inverter.getSettingsModel();
            const status = await inverter.getStatusModel();
            const controls = await inverter.getControlsModel(); // Initialize the controls variable
            const mppt = await inverter.getMpptModel(); // Initialize the mppt variable
            const inverterMetrics = isInverterModelFloat(inverterModel)
                ? getInverterMetrics_float(inverterModel)
                : getInverterMetrics_int(inverterModel);

            return {
                common,
                inverter: inverterModel,
                nameplate,
                settings,
                status,
                controls,
                mppt,
                inverterMetrics,
            };
        }),
    );

    const meter = await (async () => {
        if (config.meter.type !== 'sunspec') {
            return null;
        }
        const meterConnection = new MeterSunSpecConnection(config.meter);
        const meterData = {
            common: await meterConnection.getCommonModel(),
            meter: await meterConnection.getMeterModel(),
        };

        const meterMetrics = isMeterModelFloat(meterData.meter)
            ? getMeterMetrics_float(meterData.meter)
            : getMeterMetrics_int(meterData.meter);

        return {
            metersData: meterData,
            meterMetrics: {
                meter: meterMetrics,
            },
        };
    })();

    return {
        invertersData: invertersData.map((inverterData) => ({
            inverter: inverterData.inverter,
            nameplate: inverterData.nameplate,
            settings: inverterData.settings,
            status: {
                ...inverterData.status,
                // remap bigint to string to avoid tsoa type error
                ActWh: inverterData.status.ActWh.toString(),
                ActVAh: inverterData.status.ActVAh.toString(),
                ActVArhQ1: inverterData.status.ActVArhQ1.toString(),
                ActVArhQ2: inverterData.status.ActVArhQ2.toString(),
                ActVArhQ3: inverterData.status.ActVArhQ3.toString(),
                ActVArhQ4: inverterData.status.ActVArhQ4.toString(),
            },
            mppt: inverterData.mppt,
        })),
        inverterMetrics: invertersData.map((inverterData) => ({
            inverter: inverterData.inverterMetrics,
            nameplate: getNameplateMetrics(inverterData.nameplate),
            settings: getSettingsMetrics(inverterData.settings),
            status: (() => {
                const statusMetrics = getStatusMetrics(inverterData.status);

                return {
                    ...statusMetrics,
                    // remap bigint to string to avoid tsoa type error
                    ActWh: statusMetrics.ActWh.toString(),
                    ActVAh: statusMetrics.ActVAh.toString(),
                    ActVArhQ1: statusMetrics.ActVArhQ1.toString(),
                    ActVArhQ2: statusMetrics.ActVArhQ2.toString(),
                    ActVArhQ3: statusMetrics.ActVArhQ3.toString(),
                    ActVArhQ4: statusMetrics.ActVArhQ4.toString(),
                };
            })(),
        })),
        ...meter,
    };
}
