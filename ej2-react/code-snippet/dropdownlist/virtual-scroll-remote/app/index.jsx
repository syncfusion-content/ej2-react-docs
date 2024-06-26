import { DropDownListComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, WebApiAdaptor , Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    customerData = new DataManager({
        url: 'https://services.syncfusion.com/react/production/api/Orders',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    customerField = { text: 'OrderID', value: 'OrderID' };

    render() {
        return (
            // specifies the tag for render the DropDownList component
            <DropDownListComponent id="datas" dataSource={this.customerData} placeholder="OrderID" enableVirtualization={true} allowFiltering={true} fields={this.customerField} popupHeight="200px" >
                <Inject services={[VirtualScroll]} />
            </DropDownListComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
