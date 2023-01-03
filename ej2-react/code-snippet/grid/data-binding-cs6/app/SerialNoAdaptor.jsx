import { setValue } from '@syncfusion/ej2-base';
import { ODataAdaptor } from '@syncfusion/ej2-data';
export class SerialNoAdaptor extends ODataAdaptor {
    processResponse() {
        let i = 0;
        /* calling base class processResponse function */
        const original = super.processResponse.apply(this, arguments);
        /* Adding serial number */
        original.result.forEach((item) => setValue('Sno', ++i, item));
        return { result: original.result, count: original.count };
    }
}
