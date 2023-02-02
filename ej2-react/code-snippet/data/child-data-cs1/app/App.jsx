import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { Row } from './rowTemplate';
const SERVICE_URI = 'http://mvc.syncfusion.com/Services/Northwnd.svc/';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], aggregates: [] };
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor })
            .executeQuery(new Query().from('Orders').take(3).hierarchy(new Query()
            .foreignKey("OrderID")
            .from("Order_Details")
            .sortBy("Quantity"), () => [10248, 10249, 10250] // Selective loading of child elements
        ))
            .then((e) => {
            const res = e.result.map((row) => (<Row {...row}/>));
            this.setState({
                items: res
            });
        });
    }
    render() {
        return (<table id='datatable' className='e-table'>
                <thead>
                    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
                </thead>
                {getValue('items', this.state)}
            </table>);
    }
}
