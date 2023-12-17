import { ComboBoxComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, WebApiAdaptor , Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // maps the appropriate column to fields property
    private customerField: object = { text: 'OrderID', value: 'OrderID' };
    
    private customerData: DataManager = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/orders',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    public render() {
        return (
            // specifies the tag for render the ComboBox component
            <ComboBoxComponent id="datas" dataSource={this.customerData} fields={this.customerField} placeholder="OrderID" enableVirtualization={true} allowFiltering={true} popupHeight="200px" >
                <Inject services={[VirtualScroll]} />
            </ComboBoxComponent>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


