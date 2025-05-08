import { type SitePhases } from '../../../helpers/phases.js';
import { type InverterModel_int, type InverterModel_float } from '../models/inverter.js';
import { type MeterModel_int, type MeterModel_float } from '../models/meter.js';

type MeterModel = MeterModel_int | MeterModel_float;
type InverterModel = InverterModel_int | InverterModel_float;

export function getSitePhasesFromMeter(meter: MeterModel): SitePhases {
    switch (meter.ID) {
        case 201:
            return 'singlePhase';
        case 202:
            return 'splitPhase';
        case 203:
        case 204:
            return 'threePhase';
        default:
            throw new Error(`Unsupported meter ID: ${meter.ID}`);
    }
}

export function getSitePhasesFromInverter(inverter: InverterModel): SitePhases {
    switch (inverter.ID) {
        case 101:
            return 'singlePhase';
        case 102:
            return 'splitPhase';
        case 103:
            return 'threePhase';
        default:
            throw new Error(`Unsupported inverter ID: ${inverter.ID}`);
    }
}
