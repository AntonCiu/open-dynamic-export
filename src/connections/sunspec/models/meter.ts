import {
    registersToUint16,
    registersToInt16,
    registersToSunssf,
    registersToInt16Nullable,
    registersToSunssfNullable,
    registersToAcc32,
    registersToFloat,
    registersToId,
} from '../../modbus/helpers/converters.js';
import { modbusModelFactory } from '../../modbus/modbusModelFactory.js';

// generated from SunSpec_Information_Model_Reference_20240701.xlsx

/**
 * Meter (Single Phase, Split-Phase, Three Phase)
 *
 * A combination of the three models for single phase, split-phase, and three phase meters
 */
export type MeterModel_int = {
    /**
     * Model ID
     *
     * Model identifier.
     */
    ID: 201 | 202 | 203 | 204;

    /**
     * Model Length
     *
     * Model length.
     */
    L: number;

    /**
     * A
     *
     * Total AC Current.
     */
    A: number;

    /**
     * AphA
     *
     * Phase A Current.
     */
    AphA: number | null;

    /**
     * AphB
     *
     * Phase B Current.
     */
    AphB: number | null;

    /**
     * AphC
     *
     * Phase C Current.
     */
    AphC: number | null;

    /**
     * A_SF
     *
     * Current scale factor.
     */
    A_SF: number;

    /**
     * PhV
     *
     * Line to Neutral AC Voltage (average of active phases).
     */
    PhV: number | null;

    /**
     * PhVphA
     *
     * Phase Voltage AN.
     */
    PhVphA: number | null;

    /**
     * PhVphB
     *
     * Phase Voltage BN.
     */
    PhVphB: number | null;

    /**
     * PhVphC
     *
     * Phase Voltage CN.
     */
    PhVphC: number | null;

    /**
     * PPV
     *
     * Line to Line AC Voltage (average of active phases).
     */
    PPV: number | null;

    /**
     * PPVphAB
     *
     * Phase Voltage AB.
     */
    PPVphAB: number | null;

    /**
     * PPVphBC
     *
     * Phase Voltage BC.
     */
    PPVphBC: number | null;

    /**
     * PPVphCA
     *
     * Phase Voltage CA.
     */
    PPVphCA: number | null;

    /**
     * V_SF
     *
     * Voltage scale factor.
     */
    V_SF: number;

    /**
     * Hz
     *
     * Frequency.
     */
    Hz: number;

    /**
     * Hz_SF
     *
     * Frequency scale factor.
     */
    Hz_SF: number;

    /**
     * W
     *
     * Total Real Power.
     */
    W: number;

    /**
     * WphA
     *
     * Real Power phase A.
     */
    WphA: number | null;

    /**
     * WphB
     *
     * Real Power phase B.
     */
    WphB: number | null;

    /**
     * WphC
     *
     * Real Power phase C.
     */
    WphC: number | null;

    /**
     * W_SF
     *
     * Real Power scale factor.
     */
    W_SF: number;

    /**
     * VA
     *
     * AC Apparent Power.
     */
    VA: number | null;

    /**
     * VAphA
     *
     * Apparent Power phase A.
     */
    VAphA: number | null;

    /**
     * VAphB
     *
     * Apparent Power phase B.
     */
    VAphB: number | null;

    /**
     * VAphC
     *
     * Apparent Power phase C.
     */
    VAphC: number | null;

    /**
     * VA_SF
     *
     * Apparent Power scale factor.
     */
    VA_SF: number | null;

    /**
     * VAR
     *
     * Reactive Power.
     */
    VAR: number | null;

    /**
     * VARphA
     *
     * Reactive Power phase A.
     */
    VARphA: number | null;

    /**
     * VARphB
     *
     * Reactive Power phase B.
     */
    VARphB: number | null;

    /**
     * VARphC
     *
     * Reactive Power phase C.
     */
    VARphC: number | null;

    /**
     * VAR_SF
     *
     * Reactive Power scale factor.
     */
    VAR_SF: number | null;

    /**
     * PF
     *
     * Power Factor.
     */
    PF: number | null;

    /**
     * PFphA
     *
     * Power Factor phase A.
     */
    PFphA: number | null;

    /**
     * PFphB
     *
     * Power Factor phase B.
     */
    PFphB: number | null;

    /**
     * PFphC
     *
     * Power Factor phase C.
     */
    PFphC: number | null;

    /**
     * PF_SF
     *
     * Power Factor scale factor.
     */
    PF_SF: number | null;

    /**
     * TotWhExp
     *
     * Total Real Energy Exported.
     */
    TotWhExp: number;

    /**
     * TotWhExpPhA
     *
     * Real Energy Exported phase A.
     */
    TotWhExpPhA: number | null;

    /**
     * TotWhExpPhB
     *
     * Real Energy Exported phase B.
     */
    TotWhExpPhB: number | null;

    /**
     * TotWhExpPhC
     *
     * Real Energy Exported phase C.
     */
    TotWhExpPhC: number | null;

    /**
     * TotWhImp
     *
     * Total Real Energy Imported.
     */
    TotWhImp: number;

    /**
     * TotWhImpPhA
     *
     * Real Energy Imported phase A.
     */
    TotWhImpPhA: number | null;

    /**
     * TotWhImpPhB
     *
     * Real Energy Imported phase B.
     */
    TotWhImpPhB: number | null;

    /**
     * TotWhImpPhC
     *
     * Real Energy Imported phase C.
     */
    TotWhImpPhC: number | null;

    /**
     * TotWh_SF
     *
     * Real Energy scale factor.
     */
    TotWh_SF: number;

    /**
     * TotVAhExp
     *
     * Total Apparent Energy Exported.
     */
    TotVAhExp: number;

    /**
     * TotVAhExpPhA
     *
     * Apparent Energy Exported phase A.
     */
    TotVAhExpPhA: number | null;

    /**
     * TotVAhExpPhB
     *
     * Apparent Energy Exported phase B.
     */
    TotVAhExpPhB: number | null;

    /**
     * TotVAhExpPhC
     *
     * Apparent Energy Exported phase C.
     */
    TotVAhExpPhC: number | null;

    /**
     * TotVAhImp
     *
     * Total Apparent Energy Imported.
     */
    TotVAhImp: number;

    /**
     * TotVAhImpPhA
     *
     * Apparent Energy Imported phase A.
     */
    TotVAhImpPhA: number | null;

    /**
     * TotVAhImpPhB
     *
     * Apparent Energy Imported phase B.
     */
    TotVAhImpPhB: number | null;

    /**
     * TotVAhImpPhC
     *
     * Apparent Energy Imported phase C.
     */
    TotVAhImpPhC: number | null;

    /**
     * TotVAh_SF
     *
     * Apparent Energy scale factor.
     */
    TotVAh_SF: number | null;

    /**
     * TotVArhImpQ1
     *
     * Total Reactive Energy Imported Quadrant 1.
     */
    TotVArhImpQ1: number;

    /**
     * TotVArhImpQ1PhA
     *
     * Reactive Energy Imported Q1 phase A.
     */
    TotVArhImpQ1PhA: number | null;

    /**
     * TotVArhImpQ1PhB
     *
     * Reactive Energy Imported Q1 phase B.
     */
    TotVArhImpQ1PhB: number | null;

    /**
     * TotVArhImpQ1PhC
     *
     * Reactive Energy Imported Q1 phase C.
     */
    TotVArhImpQ1PhC: number | null;

    /**
     * TotVArhImpQ2
     *
     * Total Reactive Power Imported Quadrant 2.
     */
    TotVArhImpQ2: number;

    /**
     * TotVArhImpQ2PhA
     *
     * Reactive Power Imported Q2 phase A.
     */
    TotVArhImpQ2PhA: number | null;

    /**
     * TotVArhImpQ2PhB
     *
     * Reactive Power Imported Q2 phase B.
     */
    TotVArhImpQ2PhB: number | null;

    /**
     * TotVArhImpQ2PhC
     *
     * Reactive Power Imported Q2 phase C.
     */
    TotVArhImpQ2PhC: number | null;

    /**
     * TotVArhExpQ3
     *
     * Total Reactive Power Exported Quadrant 3.
     */
    TotVArhExpQ3: number;

    /**
     * TotVArhExpQ3PhA
     *
     * Reactive Power Exported Q3 phase A.
     */
    TotVArhExpQ3PhA: number | null;

    /**
     * TotVArhExpQ3PhB
     *
     * Reactive Power Exported Q3 phase B.
     */
    TotVArhExpQ3PhB: number | null;

    /**
     * TotVArhExpQ3PhC
     *
     * Reactive Power Exported Q3 phase C.
     */
    TotVArhExpQ3PhC: number | null;

    /**
     * TotVArhExpQ4
     *
     * Total Reactive Power Exported Quadrant 4.
     */
    TotVArhExpQ4: number;

    /**
     * TotVArhExpQ4PhA
     *
     * Reactive Power Exported Q4 phase A.
     */
    TotVArhExpQ4PhA: number | null;

    /**
     * TotVArhExpQ4PhB
     *
     * Reactive Power Exported Q4 phase B.
     */
    TotVArhExpQ4PhB: number | null;

    /**
     * TotVArhExpQ4PhC
     *
     * Reactive Power Exported Q4 phase C.
     */
    TotVArhExpQ4PhC: number | null;

    /**
     * TotVArh_SF
     *
     * Reactive Energy scale factor.
     */
    TotVArh_SF: number | null;

    /**
     * Evt
     *
     * Meter Event Flags.
     */
    Evt: MeterEvent;
};

export const meterModel_int = modbusModelFactory<MeterModel_int>({
    name: 'meter_int',
    mapping: {
        ID: {
            start: 0,
            end: 1,
            readConverter: (value) => registersToId(value, [201, 202, 203]),
        },
        L: {
            start: 1,
            end: 2,
            readConverter: registersToUint16,
        },
        A: {
            start: 2,
            end: 3,
            readConverter: registersToInt16,
        },
        AphA: {
            start: 3,
            end: 4,
            readConverter: registersToInt16Nullable,
        },
        AphB: {
            start: 4,
            end: 5,
            readConverter: registersToInt16Nullable,
        },
        AphC: {
            start: 5,
            end: 6,
            readConverter: registersToInt16Nullable,
        },
        A_SF: {
            start: 6,
            end: 7,
            readConverter: registersToSunssf,
        },
        PhV: {
            start: 7,
            end: 8,
            readConverter: registersToInt16,
        },
        PhVphA: {
            start: 8,
            end: 9,
            readConverter: registersToInt16Nullable,
        },
        PhVphB: {
            start: 9,
            end: 10,
            readConverter: registersToInt16Nullable,
        },
        PhVphC: {
            start: 10,
            end: 11,
            readConverter: registersToInt16Nullable,
        },
        PPV: {
            start: 11,
            end: 12,
            readConverter: registersToInt16Nullable,
        },
        PPVphAB: {
            start: 12,
            end: 13,
            readConverter: registersToInt16Nullable,
        },
        PPVphBC: {
            start: 13,
            end: 14,
            readConverter: registersToInt16Nullable,
        },
        PPVphCA: {
            start: 14,
            end: 15,
            readConverter: registersToInt16Nullable,
        },
        V_SF: {
            start: 15,
            end: 16,
            readConverter: registersToSunssf,
        },
        Hz: {
            start: 16,
            end: 17,
            readConverter: registersToInt16,
        },
        Hz_SF: {
            start: 17,
            end: 18,
            readConverter: registersToSunssf,
        },
        W: {
            start: 18,
            end: 19,
            readConverter: registersToInt16,
        },
        WphA: {
            start: 19,
            end: 20,
            readConverter: registersToInt16Nullable,
        },
        WphB: {
            start: 20,
            end: 21,
            readConverter: registersToInt16Nullable,
        },
        WphC: {
            start: 21,
            end: 22,
            readConverter: registersToInt16Nullable,
        },
        W_SF: {
            start: 22,
            end: 23,
            readConverter: registersToSunssf,
        },
        VA: {
            start: 23,
            end: 24,
            readConverter: registersToInt16Nullable,
        },
        VAphA: {
            start: 24,
            end: 25,
            readConverter: registersToInt16Nullable,
        },
        VAphB: {
            start: 25,
            end: 26,
            readConverter: registersToInt16Nullable,
        },
        VAphC: {
            start: 26,
            end: 27,
            readConverter: registersToInt16Nullable,
        },
        VA_SF: {
            start: 27,
            end: 28,
            readConverter: registersToSunssfNullable,
        },
        VAR: {
            start: 28,
            end: 29,
            readConverter: registersToInt16Nullable,
        },
        VARphA: {
            start: 29,
            end: 30,
            readConverter: registersToInt16Nullable,
        },
        VARphB: {
            start: 30,
            end: 31,
            readConverter: registersToInt16Nullable,
        },
        VARphC: {
            start: 31,
            end: 32,
            readConverter: registersToInt16Nullable,
        },
        VAR_SF: {
            start: 32,
            end: 33,
            readConverter: registersToSunssfNullable,
        },
        PF: {
            start: 33,
            end: 34,
            readConverter: registersToInt16Nullable,
        },
        PFphA: {
            start: 34,
            end: 35,
            readConverter: registersToInt16Nullable,
        },
        PFphB: {
            start: 35,
            end: 36,
            readConverter: registersToInt16Nullable,
        },
        PFphC: {
            start: 36,
            end: 37,
            readConverter: registersToInt16Nullable,
        },
        PF_SF: {
            start: 37,
            end: 38,
            readConverter: registersToSunssfNullable,
        },
        TotWhExp: {
            start: 38,
            end: 40,
            readConverter: registersToAcc32,
        },
        TotWhExpPhA: {
            start: 40,
            end: 42,
            readConverter: registersToAcc32,
        },
        TotWhExpPhB: {
            start: 42,
            end: 44,
            readConverter: registersToAcc32,
        },
        TotWhExpPhC: {
            start: 44,
            end: 46,
            readConverter: registersToAcc32,
        },
        TotWhImp: {
            start: 46,
            end: 48,
            readConverter: registersToAcc32,
        },
        TotWhImpPhA: {
            start: 48,
            end: 50,
            readConverter: registersToAcc32,
        },
        TotWhImpPhB: {
            start: 50,
            end: 52,
            readConverter: registersToAcc32,
        },
        TotWhImpPhC: {
            start: 52,
            end: 54,
            readConverter: registersToAcc32,
        },
        TotWh_SF: {
            start: 54,
            end: 55,
            readConverter: registersToSunssf,
        },
        TotVAhExp: {
            start: 55,
            end: 57,
            readConverter: registersToAcc32,
        },
        TotVAhExpPhA: {
            start: 57,
            end: 59,
            readConverter: registersToAcc32,
        },
        TotVAhExpPhB: {
            start: 59,
            end: 61,
            readConverter: registersToAcc32,
        },
        TotVAhExpPhC: {
            start: 61,
            end: 63,
            readConverter: registersToAcc32,
        },
        TotVAhImp: {
            start: 63,
            end: 65,
            readConverter: registersToAcc32,
        },
        TotVAhImpPhA: {
            start: 65,
            end: 67,
            readConverter: registersToAcc32,
        },
        TotVAhImpPhB: {
            start: 67,
            end: 69,
            readConverter: registersToAcc32,
        },
        TotVAhImpPhC: {
            start: 69,
            end: 71,
            readConverter: registersToAcc32,
        },
        TotVAh_SF: {
            start: 71,
            end: 72,
            readConverter: registersToSunssfNullable,
        },
        TotVArhImpQ1: {
            start: 72,
            end: 74,
            readConverter: registersToAcc32,
        },
        TotVArhImpQ1PhA: {
            start: 74,
            end: 76,
            readConverter: registersToAcc32,
        },
        TotVArhImpQ1PhB: {
            start: 76,
            end: 78,
            readConverter: registersToAcc32,
        },
        TotVArhImpQ1PhC: {
            start: 78,
            end: 80,
            readConverter: registersToAcc32,
        },
        TotVArhImpQ2: {
            start: 80,
            end: 82,
            readConverter: registersToAcc32,
        },
        TotVArhImpQ2PhA: {
            start: 82,
            end: 84,
            readConverter: registersToAcc32,
        },
        TotVArhImpQ2PhB: {
            start: 84,
            end: 86,
            readConverter: registersToAcc32,
        },
        TotVArhImpQ2PhC: {
            start: 86,
            end: 88,
            readConverter: registersToAcc32,
        },
        TotVArhExpQ3: {
            start: 88,
            end: 90,
            readConverter: registersToAcc32,
        },
        TotVArhExpQ3PhA: {
            start: 90,
            end: 92,
            readConverter: registersToAcc32,
        },
        TotVArhExpQ3PhB: {
            start: 92,
            end: 94,
            readConverter: registersToAcc32,
        },
        TotVArhExpQ3PhC: {
            start: 94,
            end: 96,
            readConverter: registersToAcc32,
        },
        TotVArhExpQ4: {
            start: 96,
            end: 98,
            readConverter: registersToAcc32,
        },
        TotVArhExpQ4PhA: {
            start: 98,
            end: 100,
            readConverter: registersToAcc32,
        },
        TotVArhExpQ4PhB: {
            start: 100,
            end: 102,
            readConverter: registersToAcc32,
        },
        TotVArhExpQ4PhC: {
            start: 102,
            end: 104,
            readConverter: registersToAcc32,
        },
        TotVArh_SF: {
            start: 104,
            end: 105,
            readConverter: registersToSunssfNullable,
        },
        Evt: {
            start: 105,
            end: 106,
            readConverter: registersToUint16,
        },
    },
});

// generated from SunSpec_Information_Model_Reference_20240701.xlsx

/**
 * Meter (Single Phase, Split-Phase, Three Phase)
 *
 * A combination of the three models for single phase, split-phase, and three phase meters
 */
export type MeterModel_float = {
    /**
     * Model ID
     *
     * Model identifier.
     */
    ID: 211 | 212 | 213 | 214;

    /**
     * Model Length
     *
     * Model length.
     */
    L: number;

    /**
     * A
     *
     * Total AC Current.
     */
    A: number;

    /**
     * AphA
     *
     * Phase A Current.
     */
    AphA: number | null;

    /**
     * AphB
     *
     * Phase B Current.
     */
    AphB: number | null;

    /**
     * AphC
     *
     * Phase C Current.
     */
    AphC: number | null;

    /**
     * PhV
     *
     * Line to Neutral AC Voltage (average of active phases).
     */
    PhV: number | null;

    /**
     * PhVphA
     *
     * Phase Voltage AN.
     */
    PhVphA: number | null;

    /**
     * PhVphB
     *
     * Phase Voltage BN.
     */
    PhVphB: number | null;

    /**
     * PhVphC
     *
     * Phase Voltage CN.
     */
    PhVphC: number | null;

    /**
     * PPV
     *
     * Line to Line AC Voltage (average of active phases).
     */
    PPV: number | null;

    /**
     * PPVphAB
     *
     * Phase Voltage AB.
     */
    PPVphAB: number | null;

    /**
     * PPVphBC
     *
     * Phase Voltage BC.
     */
    PPVphBC: number | null;

    /**
     * PPVphCA
     *
     * Phase Voltage CA.
     */
    PPVphCA: number | null;

    /**
     * Hz
     *
     * Frequency.
     */
    Hz: number;

    /**
     * W
     *
     * Total Real Power.
     */
    W: number;

    /**
     * WphA
     *
     * Real Power phase A.
     */
    WphA: number | null;

    /**
     * WphB
     *
     * Real Power phase B.
     */
    WphB: number | null;

    /**
     * WphC
     *
     * Real Power phase C.
     */
    WphC: number | null;

    /**
     * VA
     *
     * AC Apparent Power.
     */
    VA: number | null;

    /**
     * VAphA
     *
     * Apparent Power phase A.
     */
    VAphA: number | null;

    /**
     * VAphB
     *
     * Apparent Power phase B.
     */
    VAphB: number | null;

    /**
     * VAphC
     *
     * Apparent Power phase C.
     */
    VAphC: number | null;

    /**
     * VAR
     *
     * Reactive Power.
     */
    VAR: number | null;

    /**
     * VARphA
     *
     * Reactive Power phase A.
     */
    VARphA: number | null;

    /**
     * VARphB
     *
     * Reactive Power phase B.
     */
    VARphB: number | null;

    /**
     * VARphC
     *
     * Reactive Power phase C.
     */
    VARphC: number | null;

    /**
     * PF
     *
     * Power Factor.
     */
    PF: number | null;

    /**
     * PFphA
     *
     * Power Factor phase A.
     */
    PFphA: number | null;

    /**
     * PFphB
     *
     * Power Factor phase B.
     */
    PFphB: number | null;

    /**
     * PFphC
     *
     * Power Factor phase C.
     */
    PFphC: number | null;

    /**
     * TotWhExp
     *
     * Total Real Energy Exported.
     */
    TotWhExp: number;

    /**
     * TotWhExpPhA
     *
     * Real Energy Exported phase A.
     */
    TotWhExpPhA: number | null;

    /**
     * TotWhExpPhB
     *
     * Real Energy Exported phase B.
     */
    TotWhExpPhB: number | null;

    /**
     * TotWhExpPhC
     *
     * Real Energy Exported phase C.
     */
    TotWhExpPhC: number | null;

    /**
     * TotWhImp
     *
     * Total Real Energy Imported.
     */
    TotWhImp: number;

    /**
     * TotWhImpPhA
     *
     * Real Energy Imported phase A.
     */
    TotWhImpPhA: number | null;

    /**
     * TotWhImpPhB
     *
     * Real Energy Imported phase B.
     */
    TotWhImpPhB: number | null;

    /**
     * TotWhImpPhC
     *
     * Real Energy Imported phase C.
     */
    TotWhImpPhC: number | null;

    /**
     * TotVAhExp
     *
     * Total Apparent Energy Exported.
     */
    TotVAhExp: number;

    /**
     * TotVAhExpPhA
     *
     * Apparent Energy Exported phase A.
     */
    TotVAhExpPhA: number | null;

    /**
     * TotVAhExpPhB
     *
     * Apparent Energy Exported phase B.
     */
    TotVAhExpPhB: number | null;

    /**
     * TotVAhExpPhC
     *
     * Apparent Energy Exported phase C.
     */
    TotVAhExpPhC: number | null;

    /**
     * TotVAhImp
     *
     * Total Apparent Energy Imported.
     */
    TotVAhImp: number;

    /**
     * TotVAhImpPhA
     *
     * Apparent Energy Imported phase A.
     */
    TotVAhImpPhA: number | null;

    /**
     * TotVAhImpPhB
     *
     * Apparent Energy Imported phase B.
     */
    TotVAhImpPhB: number | null;

    /**
     * TotVAhImpPhC
     *
     * Apparent Energy Imported phase C.
     */
    TotVAhImpPhC: number | null;

    /**
     * TotVArhImpQ1
     *
     * Total Reactive Energy Imported Quadrant 1.
     */
    TotVArhImpQ1: number;

    /**
     * TotVArhImpQ1PhA
     *
     * Reactive Energy Imported Q1 phase A.
     */
    TotVArhImpQ1PhA: number | null;

    /**
     * TotVArhImpQ1PhB
     *
     * Reactive Energy Imported Q1 phase B.
     */
    TotVArhImpQ1PhB: number | null;

    /**
     * TotVArhImpQ1PhC
     *
     * Reactive Energy Imported Q1 phase C.
     */
    TotVArhImpQ1PhC: number | null;

    /**
     * TotVArhImpQ2
     *
     * Total Reactive Power Imported Quadrant 2.
     */
    TotVArhImpQ2: number;

    /**
     * TotVArhImpQ2PhA
     *
     * Reactive Power Imported Q2 phase A.
     */
    TotVArhImpQ2PhA: number | null;

    /**
     * TotVArhImpQ2PhB
     *
     * Reactive Power Imported Q2 phase B.
     */
    TotVArhImpQ2PhB: number | null;

    /**
     * TotVArhImpQ2PhC
     *
     * Reactive Power Imported Q2 phase C.
     */
    TotVArhImpQ2PhC: number | null;

    /**
     * TotVArhExpQ3
     *
     * Total Reactive Power Exported Quadrant 3.
     */
    TotVArhExpQ3: number;

    /**
     * TotVArhExpQ3PhA
     *
     * Reactive Power Exported Q3 phase A.
     */
    TotVArhExpQ3PhA: number | null;

    /**
     * TotVArhExpQ3PhB
     *
     * Reactive Power Exported Q3 phase B.
     */
    TotVArhExpQ3PhB: number | null;

    /**
     * TotVArhExpQ3PhC
     *
     * Reactive Power Exported Q3 phase C.
     */
    TotVArhExpQ3PhC: number | null;

    /**
     * TotVArhExpQ4
     *
     * Total Reactive Power Exported Quadrant 4.
     */
    TotVArhExpQ4: number;

    /**
     * TotVArhExpQ4PhA
     *
     * Reactive Power Exported Q4 phase A.
     */
    TotVArhExpQ4PhA: number | null;

    /**
     * TotVArhExpQ4PhB
     *
     * Reactive Power Exported Q4 phase B.
     */
    TotVArhExpQ4PhB: number | null;

    /**
     * TotVArhExpQ4PhC
     *
     * Reactive Power Exported Q4 phase C.
     */
    TotVArhExpQ4PhC: number | null;

    /**
     * Evt
     *
     * Meter Event Flags.
     */
    Evt: MeterEvent;
};

export const meterModel_float = modbusModelFactory<MeterModel_float>({
    name: 'meter_float',
    mapping: {
        ID: {
            start: 0,
            end: 1,
            readConverter: (value) =>
                registersToId(value, [211, 212, 213, 214]),
        },
        L: {
            start: 1,
            end: 2,
            readConverter: registersToUint16,
        },
        A: {
            start: 2,
            end: 4,
            readConverter: registersToFloat,
        },
        AphA: {
            start: 4,
            end: 6,
            readConverter: registersToFloat,
        },
        AphB: {
            start: 6,
            end: 8,
            readConverter: registersToFloat,
        },
        AphC: {
            start: 8,
            end: 10,
            readConverter: registersToFloat,
        },
        PhV: {
            start: 10,
            end: 12,
            readConverter: registersToFloat,
        },
        PhVphA: {
            start: 12,
            end: 14,
            readConverter: registersToFloat,
        },
        PhVphB: {
            start: 14,
            end: 16,
            readConverter: registersToFloat,
        },
        PhVphC: {
            start: 16,
            end: 18,
            readConverter: registersToFloat,
        },
        PPV: {
            start: 18,
            end: 20,
            readConverter: registersToFloat,
        },
        PPVphAB: {
            start: 20,
            end: 22,
            readConverter: registersToFloat,
        },
        PPVphBC: {
            start: 22,
            end: 24,
            readConverter: registersToFloat,
        },
        PPVphCA: {
            start: 24,
            end: 26,
            readConverter: registersToFloat,
        },
        Hz: {
            start: 26,
            end: 28,
            readConverter: registersToFloat,
        },
        W: {
            start: 28,
            end: 30,
            readConverter: registersToFloat,
        },
        WphA: {
            start: 30,
            end: 32,
            readConverter: registersToFloat,
        },
        WphB: {
            start: 32,
            end: 34,
            readConverter: registersToFloat,
        },
        WphC: {
            start: 34,
            end: 36,
            readConverter: registersToFloat,
        },
        VA: {
            start: 36,
            end: 38,
            readConverter: registersToFloat,
        },
        VAphA: {
            start: 38,
            end: 40,
            readConverter: registersToFloat,
        },
        VAphB: {
            start: 40,
            end: 42,
            readConverter: registersToFloat,
        },
        VAphC: {
            start: 42,
            end: 44,
            readConverter: registersToFloat,
        },
        VAR: {
            start: 44,
            end: 46,
            readConverter: registersToFloat,
        },
        VARphA: {
            start: 46,
            end: 48,
            readConverter: registersToFloat,
        },
        VARphB: {
            start: 48,
            end: 50,
            readConverter: registersToFloat,
        },
        VARphC: {
            start: 50,
            end: 52,
            readConverter: registersToFloat,
        },
        PF: {
            start: 52,
            end: 54,
            readConverter: registersToFloat,
        },
        PFphA: {
            start: 54,
            end: 56,
            readConverter: registersToFloat,
        },
        PFphB: {
            start: 56,
            end: 58,
            readConverter: registersToFloat,
        },
        PFphC: {
            start: 58,
            end: 60,
            readConverter: registersToFloat,
        },
        TotWhExp: {
            start: 60,
            end: 62,
            readConverter: registersToFloat,
        },
        TotWhExpPhA: {
            start: 62,
            end: 64,
            readConverter: registersToFloat,
        },
        TotWhExpPhB: {
            start: 64,
            end: 66,
            readConverter: registersToFloat,
        },
        TotWhExpPhC: {
            start: 66,
            end: 68,
            readConverter: registersToFloat,
        },
        TotWhImp: {
            start: 68,
            end: 70,
            readConverter: registersToFloat,
        },
        TotWhImpPhA: {
            start: 70,
            end: 72,
            readConverter: registersToFloat,
        },
        TotWhImpPhB: {
            start: 72,
            end: 74,
            readConverter: registersToFloat,
        },
        TotWhImpPhC: {
            start: 74,
            end: 76,
            readConverter: registersToFloat,
        },
        TotVAhExp: {
            start: 76,
            end: 78,
            readConverter: registersToFloat,
        },
        TotVAhExpPhA: {
            start: 78,
            end: 80,
            readConverter: registersToFloat,
        },
        TotVAhExpPhB: {
            start: 80,
            end: 82,
            readConverter: registersToFloat,
        },
        TotVAhExpPhC: {
            start: 82,
            end: 84,
            readConverter: registersToFloat,
        },
        TotVAhImp: {
            start: 84,
            end: 86,
            readConverter: registersToFloat,
        },
        TotVAhImpPhA: {
            start: 86,
            end: 88,
            readConverter: registersToFloat,
        },
        TotVAhImpPhB: {
            start: 88,
            end: 90,
            readConverter: registersToFloat,
        },
        TotVAhImpPhC: {
            start: 92,
            end: 94,
            readConverter: registersToFloat,
        },
        TotVArhImpQ1: {
            start: 94,
            end: 96,
            readConverter: registersToFloat,
        },
        TotVArhImpQ1PhA: {
            start: 96,
            end: 98,
            readConverter: registersToFloat,
        },
        TotVArhImpQ1PhB: {
            start: 98,
            end: 100,
            readConverter: registersToFloat,
        },
        TotVArhImpQ1PhC: {
            start: 100,
            end: 102,
            readConverter: registersToFloat,
        },
        TotVArhImpQ2: {
            start: 102,
            end: 104,
            readConverter: registersToFloat,
        },
        TotVArhImpQ2PhA: {
            start: 104,
            end: 106,
            readConverter: registersToFloat,
        },
        TotVArhImpQ2PhB: {
            start: 106,
            end: 108,
            readConverter: registersToFloat,
        },
        TotVArhImpQ2PhC: {
            start: 108,
            end: 110,
            readConverter: registersToFloat,
        },
        TotVArhExpQ3: {
            start: 110,
            end: 112,
            readConverter: registersToFloat,
        },
        TotVArhExpQ3PhA: {
            start: 112,
            end: 114,
            readConverter: registersToFloat,
        },
        TotVArhExpQ3PhB: {
            start: 114,
            end: 116,
            readConverter: registersToFloat,
        },
        TotVArhExpQ3PhC: {
            start: 116,
            end: 118,
            readConverter: registersToFloat,
        },
        TotVArhExpQ4: {
            start: 118,
            end: 120,
            readConverter: registersToFloat,
        },
        TotVArhExpQ4PhA: {
            start: 120,
            end: 122,
            readConverter: registersToFloat,
        },
        TotVArhExpQ4PhB: {
            start: 122,
            end: 124,
            readConverter: registersToFloat,
        },
        TotVArhExpQ4PhC: {
            start: 124,
            end: 126,
            readConverter: registersToFloat,
        },
        Evt: {
            start: 126,
            end: 128,
            readConverter: registersToFloat,
        },
    },
});

/**
 * MeterEvent Enumeration
 *
 * Bitmask values representing Meter Event Flags.
 */
export enum MeterEvent {
    PowerFailure = 1 << 2,
    UnderVoltage = 1 << 3,
    LowPF = 1 << 4,
    OverCurrent = 1 << 5,
    OverVoltage = 1 << 6,
    MissingSensor = 1 << 7,
    OEM01 = 1 << 16,
    OEM02 = 1 << 17,
    OEM03 = 1 << 18,
    OEM04 = 1 << 19,
    OEM05 = 1 << 20,
    OEM06 = 1 << 21,
    OEM07 = 1 << 22,
    OEM08 = 1 << 23,
    OEM09 = 1 << 24,
    OEM10 = 1 << 25,
    OEM11 = 1 << 26,
    OEM12 = 1 << 27,
    OEM13 = 1 << 28,
    OEM14 = 1 << 29,
    OEM15 = 1 << 30,
}
