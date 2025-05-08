import { expect, it } from 'vitest';
import { type InverterEvent1, type InverterModel_int, type InverterModel_float } from '../models/inverter.js';
import { InverterState } from '../models/inverter.js';
import { getInverterMetrics_int, getInverterMetrics_float } from './inverterMetrics.js';

function isInverterModelFloat(inverter: InverterModel_int | InverterModel_float): inverter is InverterModel_float {
    return [112, 111, 113].includes(inverter.ID); // Replace with actual float model IDs
}

it('getInverterMetrics handles both int and float models', () => {
    const inverterInt: InverterModel_int = {
        ID: 103,
        L: 50,
        A: 3051,
        AphA: 1016,
        AphB: 1017,
        AphC: 1018,
        A_SF: -2,
        PPVphAB: 39600,
        PPVphBC: 39500,
        PPVphCA: 39920,
        PhVphA: 23010,
        PhVphB: 22770,
        PhVphC: 22900,
        V_SF: -2,
        W: 6990,
        W_SF: 0,
        Hz: 4999,
        Hz_SF: -2,
        VA: 6990,
        VA_SF: 0,
        VAr: -2500,
        VAr_SF: -2,
        PF: 10000,
        PF_SF: -2,
        WH: 77877496,
        WH_SF: 0,
        DCA: null,
        DCA_SF: null,
        DCV: null,
        DCV_SF: null,
        DCW: 7347,
        DCW_SF: 0,
        TmpCab: null,
        TmpSnk: null,
        TmpTrns: null,
        TmpOt: null,
        Tmp_SF: null,
        St: InverterState.MPPT,
        StVnd: 4,
        Evt1: 0 as InverterEvent1,
        Evt2: 0,
        EvtVnd1: 0,
        EvtVnd2: 0,
        EvtVnd3: 0,
        EvtVnd4: 0,
    };

    const inverterFloat: InverterModel_float = {
        ...inverterInt,
        ID: 112, // Replace with an actual float model ID
    };

    const testCases = [inverterInt, inverterFloat];

    testCases.forEach((inverter) => {
        const result = isInverterModelFloat(inverter)
            ? getInverterMetrics_float(inverter)
            : getInverterMetrics_int(inverter);

        expect(result).toStrictEqual({
            A: 30.51,
            AphA: 10.16,
            AphB: 10.17,
            AphC: 10.18,
            DCA: null,
            DCV: null,
            DCW: 7347,
            Hz: 49.99,
            PF: 100,
            PPVphAB: 396,
            PPVphBC: 395,
            PPVphCA: 399.2,
            PhVphA: 230.1,
            PhVphB: 227.7,
            PhVphC: 229,
            VA: 6990,
            VAr: -25,
            W: 6990,
            WH: 77877496,
            phases: 'threePhase',
        });
    });
});
