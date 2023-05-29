import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    dm = new DataManager({
        adaptor: new WebApiAdaptor,
        url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Customers/'
    }).executeQuery(new Query().take(8)).then((e) => {
        this.model.dataSource = e.result.d;
    });
    model = {
        dataSource: [{}],
        fields: { text: 'ContactName', value: 'CustomerID' },
        placeholder: 'Select a customer'
    };
    render() {
        return (<div id='container'>
        <span className="content-title"> Select customer name: </span>
        <InPlaceEditorComponent id='dropdownelement' mode='Inline' type='DropDownList' value='Maria Anders' model={this.model}/>
     </div>);
    }
}
export default App;
