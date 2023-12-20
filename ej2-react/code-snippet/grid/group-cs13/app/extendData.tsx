import { Query } from '@syncfusion/ej2-data';
import { Data } from '@syncfusion/ej2-react-grids';

const old = Data.prototype.generateQuery;
export class PagedData extends Data {
    constructor(){
      super();
    }
    public generateQuery(skipPage?: boolean) : Query {
      const query = old.call(this, true);
      super.pageQuery(query);
      return query;
    }
}