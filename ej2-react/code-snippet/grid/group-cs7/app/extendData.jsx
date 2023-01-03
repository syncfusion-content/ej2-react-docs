import { Data } from '@syncfusion/ej2-react-grids';
const old = Data.prototype.generateQuery;
export class PagedData extends Data {
    constructor() {
        super();
    }
    generateQuery(skipPage) {
        const query = old.call(this, true);
        super.pageQuery(query);
        return query;
    }
}
