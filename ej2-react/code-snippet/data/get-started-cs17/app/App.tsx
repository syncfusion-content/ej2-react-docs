import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URI:string= 'https://services.odata.org/V4/Northwind/Northwind.svc/';

export default class App extends React.Component<{}, {}>{
    constructor(props: object) {
        super(props);
        this.state = { items: [] };
    }
    componentDidMount() {
        new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor() })
        .executeQuery(new Query().from('Orders').take(8))
        .then((e: ReturnOption) => {
            const res = (e.result as IOrders[]).map((row: IOrders,index: number) => (
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
            </table>
        )
    }

}