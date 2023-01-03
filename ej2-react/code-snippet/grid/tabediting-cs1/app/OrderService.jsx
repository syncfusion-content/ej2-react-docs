/*
import { Ajax, getValue } from '@syncfusion/ej2-base';
import { DataResult, DataSourceChangedEventArgs, DataStateChangeEventArgs } from '@syncfusion/ej2-react-grids';

export class OrderService {
    public ajax: Ajax = new Ajax({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET'
    });
    private BASE_URL: string = '/api/Orders';
  
    public execute(state: DataStateChangeEventArgs): Promise<DataResult> {
        return this.getData(state);
    }
    
    public addRecord(state: DataSourceChangedEventArgs) : Promise<DataResult> {
        
        const add: Ajax = new Ajax({
            mode: true,
            onFailure: (e: Error) => false,
            type: 'POST'
        });
        return add.send(JSON.stringify((state.data && state.data[0]))).then((response: any) => {
            const data: any = JSON.parse(response);
            return data;
        });
    }
    public updateRecord(state: DataSourceChangedEventArgs) : Promise<DataResult> {
        const update: Ajax = new Ajax({
            mode: true,
            onFailure: (e: Error) => false,
            type: 'PUT'
        });
        return update.send(state.data).then((response: any) => {
            const data: any = JSON.parse(response);
            return data;
        });
    }
    public deleteRecord(state: DataSourceChangedEventArgs) : Promise<DataResult> {
        const remove: Ajax = new Ajax({
            mode: true,
            onFailure: (e: Error) => false,
            type: 'DELETE'
        });
        return remove.send((state.data && state.data[0])).then((response: any) => {
            const data: any = JSON.parse(response);
            return data;
        });
    }
    private getData(state: DataStateChangeEventArgs): Promise<DataResult> {
        const pageQuery = state.skip ? `$skip=${state.skip}&$top=${state.take}` : `$top=${state.take}`;
        this.ajax.url = `${this.BASE_URL}?${pageQuery}&$inlinecount=allpages&$format=json`;
  
        return this.ajax.send().then((response: any) => {
            const data: any = JSON.parse(response);
            if(!state.skip && state.skip !== 0) {
                return getValue('d.results', data);
            }
            return {
                count:  parseInt(getValue('d.__count', data), 10),
                result: getValue('d.results', data)
            };
        });
    }
  };
  */ 
