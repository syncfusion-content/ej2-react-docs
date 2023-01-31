import { setValue } from '@syncfusion/ej2-base';
import { ODataV4Adaptor } from '@syncfusion/ej2-data';
export class SerialNoAdaptor extends ODataV4Adaptor {
    processResponse() {
        let i = 0;
        // calling base class processResponse function
        const original = super.processResponse.apply(this, arguments);
        // adding serial number
        original.forEach((item) => setValue('SNO', ++i, item));
        return original;
    }
}
