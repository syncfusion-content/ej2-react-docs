import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
function App() {
    let query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
    let model = {
        dataSource: new DataManager({
            adaptor: new ODataV4Adaptor,
            crossDomain: true,
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
        }),
        fields: { text: 'ContactName', value: 'CustomerID' },
        placeholder: 'Select a customer',
        query: query
    };
    return (<div id='container'>
        <span className="content-title"> Select customer name: </span>
        <InPlaceEditorComponent id='dropdownelement' mode='Inline' type='DropDownList' value='Maria Anders' model={model}/>
     </div>);
}
export default App;
