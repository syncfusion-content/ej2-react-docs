import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { AggregateRow } from './aggregateTemplate';
import { Row } from './rowTemplate';
const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], aggregates: [] };
    }
    componentDidMount() {
        new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor() })
            .executeQuery(new Query().take(5).requiresCount().aggregate('min', 'EmployeeID'))
            .then((e) => {
                const agg = { min: e.aggregates['EmployeeID - min'] };
                const ret = <AggregateRow key="aggregate" {...agg} />;
                const res = e.result.map((row) => (
                    <Row key={row.OrderID} {...row} />
                ));
                this.setState({
                    aggregates: [ret],
                    items: res
                });
            });
    }
    render() {
        return (<table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{getValue('items', this.state)}</tbody>
                <tfoot>{getValue('aggregates', this.state)}</tfoot>
            </table>);
    }
}
