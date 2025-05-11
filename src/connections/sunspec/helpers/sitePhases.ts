import { type SitePhases } from '../../../helpers/phases.js';
import { type InverterModel_int, type InverterModel_float } from '../models/inverter.js';
import { type MeterModel_int, type MeterModel_float } from '../models/meter.js';

type MeterModel = MeterModel_int | MeterModel_float;
type InverterModel = InverterModel_int | InverterModel_float;

function isMeterModelFloat(meter: MeterModel): meter is MeterModel_float {
    return [211, 212, 213, 214].includes(meter.ID);
}

function isInverterModelFloat(inverter: InverterModel): inverter is InverterModel_float {
    return [112, 111, 113].includes(inverter.ID);
}

export function getSitePhasesFromMeter(meter: MeterModel): SitePhases {
    if (isMeterModelFloat(meter)) {
        switch (meter.ID) {
            case 211:
                return 'singlePhase';
            case 212:
                return 'splitPhase';
            case 213:
                return 'threePhase';
            case 214:
                return 'threePhase';
        }
    } else {
        switch (meter.ID) {
            case 201:
                return 'singlePhase';
            case 202:
                return 'splitPhase';
            case 203:
                return 'threePhase';
            case 204:
                return 'threePhase';
        }
    }
}


export function getSitePhasesFromInverter(inverter: InverterModel): SitePhases {
    if (isInverterModelFloat(inverter)) {
        switch (inverter.ID) {
        case 111:
            return 'singlePhase';
        case 112:
            return 'splitPhase';
        case 113:
            return 'threePhase';      
        }
    } else {
        switch (inverter.ID) {
        case 101:
            return 'singlePhase';
        case 102:
            return 'splitPhase';
        case 103:
            return 'threePhase';     
    }
}
}
