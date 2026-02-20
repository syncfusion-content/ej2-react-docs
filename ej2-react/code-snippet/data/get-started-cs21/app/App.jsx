import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Predicate, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { Row } from './rowTemplate';
const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    componentDidMount() {
        let predicate = new Predicate('EmployeeID', 'equal', 3);
        predicate = predicate.or('EmployeeID', 'equal', 2);
        
        new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor() })
            .executeQuery(new Query().where(predicate).take(8))
            .then((e) => {
                const res = e.result.map((row) => (
                    <Row key={row.OrderID} {...row} />
                ));
                this.setState({
                    items: res
                });
            }
        );
    }
    render() {
        return (<table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                <tbody>{getValue('items', this.state)}</tbody>
            </table>
        );
    }
}
