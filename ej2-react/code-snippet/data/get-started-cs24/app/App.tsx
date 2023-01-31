

import { getValue } from '@syncfusion/ej2-base';
import { Aggregates, DataManager, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import { AggregateRow } from './aggregateTemplate';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URI: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

export default class App extends React.Component<{}, {}>{
    constructor(props: object) {
        super(props);
        this.state = { items: [], aggregates: [] };
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor })
        .executeQuery(new Query().take(5).requiresCount().aggregate('min', 'EmployeeID'))
            .then((e: ReturnOption) => {
                const agg: { min: object } = { min: (e.aggregates as Aggregates)['EmployeeID - min'] };
                const ret : React.ReactElement = <AggregateRow {...agg}/>;
                const res = (e.result as IOrders[]).map((row: IOrders) => (<Row {...row}/>));
                this.setState({
                    aggregates: [ret],
                    items: res
                });
            });
     }

    public render() {
        return (<table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{getValue('items', this.state)}</tbody>
                <tfoot>{getValue('aggregates', this.state)}</tfoot>
            </table>)
    }

}


