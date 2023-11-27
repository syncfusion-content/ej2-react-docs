import { getValue } from '@syncfusion/ej2-base';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URI: string = 'https://services.syncfusion.com/react/production/api/Orders';

export default class App extends React.Component<{}, {}>{
    constructor(props: object) {
        super(props);
        this.state = { items: [] };
        
        new DataManager({ url: SERVICE_URI }).executeQuery(new Query().take(8))
        .then((e: ReturnOption) => {
            const res = ((e.result as {result: Object[]}).result as IOrders[]).map((row: IOrders, index: number) => (
                <Row key={row.OrderID} {...row} />
              ));
              this.setState({
                items: res
              });
        });
     }

    public render() {
        return (<table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{ getValue('items', this.state) }</tbody>
            </table>)
    }

}


