


import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

function App () {
  let dm: any = new DataManager({
    adaptor: new WebApiAdaptor,
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Customers/'
    }).executeQuery(new Query().take(8)).then((e: any) => {
        model.dataSource = e.result.d;
  });
  let model: any = {
    dataSource: [{}],
    fields: { text: 'ContactName', value: 'CustomerID' },
    placeholder: 'Select a customer'
  };


    return (
    <div id='container'>
        <span className="content-title"> Select customer name: </span>
        <InPlaceEditorComponent id='dropdownelement' mode='Inline' type='DropDownList' value='Maria Anders' model={model}/>
     </div>
    );

}
export default App;


