import { DataManager, JsonAdaptor, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

export default class App extends React.Component<{}, {}>{

    public result: object[] = new DataManager({ json: data, adaptor: new JsonAdaptor })
        .executeLocal(new Query().take(8));
    public items: object[] = this.result.map((row: IOrders, index) => (
            <Row key={index} {...row} />
    ));
    public render() {
    return (<table id='datatable' className='e-table'>
            <thead>
             <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
            </thead>
            <tbody>{this.items}</tbody>
           </table>);
    }

}


