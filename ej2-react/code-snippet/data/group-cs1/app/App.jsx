import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { GroupRow } from './groupTemplate';

const SERVICE_URI = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor })
            .executeQuery(new Query().group('CustomerID').take(8))
            .then((e) => {
                const res = e.result.map((row, index) => (
                    <GroupRow key={index} {...row} />
                ));
                this.setState({
                    items: res
                });
            });
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

