import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { GroupRow } from './groupTemplate';

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    componentDidMount() {
        new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor() })
            .executeQuery(new Query().group('CustomerID').take(12))
            .then((e) => {
                const res = e.result.map((row, index) => (
                    <GroupRow key={index} {...row} />
                ));
                this.setState({
                    items: res
                });
            }
        );
    }

    render() {
        return (
            <table id='datatable' className='e-table'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer ID</th>
                        <th>Employee ID</th>
                    </tr>
                </thead>
                {getValue('items', this.state)}
            </table>
        );
    }
}

