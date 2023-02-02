

import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URI: string = 'http://mvc.syncfusion.com/Services/Northwnd.svc/';

export default class App extends React.Component<{}, {}>{
    constructor(props: object) {
        super(props);
        this.state = { items: [], aggregates: [] };
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor })
        .executeQuery(new Query().from('Orders').take(3).hierarchy(
            new Query()
                .foreignKey("OrderID")
                .from("Order_Details")
                .sortBy("Quantity"),
            () => [10248, 10249, 10250] // Selective loading of child elements
            ))
            .then((e: ReturnOption) => {
                const res = (e.result as IOrders[]).map((row: IOrders) => (<Row {...row}/>));
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
                {getValue('items', this.state)}
            </table>)
    }

}


