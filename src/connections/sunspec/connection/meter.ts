import { meterModel_int, meterModel_float } from '../models/meter.js';
import { SunSpecConnection } from './base.js';

export class MeterSunSpecConnection extends SunSpecConnection {
    async getMeterModel() {
        const modelAddressById = await this.getModelAddressById();

        const address =
            modelAddressById.get(204) ??
            modelAddressById.get(203) ??
            modelAddressById.get(202) ??
            modelAddressById.get(201) ??
            modelAddressById.get(211) ??
            modelAddressById.get(212) ??
            modelAddressById.get(213) ??
            modelAddressById.get(214);

        if (!address) {
            throw new Error('No SunSpec meter model address');
        }

        if (
            modelAddressById.get(201) ||
            modelAddressById.get(202) ||
            modelAddressById.get(203) ||
            modelAddressById.get(204)
        ) {
            // Read int model
            const model_int = await meterModel_int.read({
                modbusConnection: this.modbusConnection,
                address,
                unitId: this.unitId,
            });
            return model_int;
        } else if (
            modelAddressById.get(211) ||
            modelAddressById.get(212) ||
            modelAddressById.get(213) ||
            modelAddressById.get(214)
        ) {
            // Read float model
            const model_float = await meterModel_float.read({
                modbusConnection: this.modbusConnection,
                address,
                unitId: this.unitId,
            });
            return model_float;
        } else {
            throw new Error(`Unsupported meter model ID: ${address.ID}`);
        }
    }
}
