import { setValue } from '@syncfusion/ej2-base';
import { ODataV4Adaptor } from '@syncfusion/ej2-data';

export class SerialNoAdaptor extends ODataV4Adaptor {
    public processResponse() {
        let i: number = 0;
        // calling base class processResponse function
        const original: any = super.processResponse.apply(this, arguments as any);
        // adding serial number
        original.forEach((item: object) =>  setValue('SNO', ++i, item));
        return original;
    }
}