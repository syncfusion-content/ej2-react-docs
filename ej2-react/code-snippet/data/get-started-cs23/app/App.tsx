

import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataAdaptor, Predicate, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URI: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

export default class App extends React.Component<{}, {}>{
    constructor(props: object) {
        super(props);
        this.state = { items: [] };
        let predicate: Predicate = new Predicate('EmployeeID', 'equal', 3);
        predicate = predicate.or('EmployeeID', 'equal', 2);
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor })
            .executeQuery(new Query().page(2, 8))
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
                <tbody>{ getValue('items', this.state) }</tbody>
            </table>)
    }

}


