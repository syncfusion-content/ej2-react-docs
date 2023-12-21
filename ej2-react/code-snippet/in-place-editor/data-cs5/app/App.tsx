


import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

class App extends React.Component {
  public model: any = {
    dataSource: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor
    }),
    fields: { text: 'ContactName', value: 'CustomerID' },
    query : new Query().select(['ContactName', 'CustomerID']).take(6),
    placeholder: 'Select a customer'
  };

  public render() {
    return (
    <div id='container'>
        <span className="content-title"> Select customer name: </span>
        <InPlaceEditorComponent id='dropdownelement' mode='Inline' type='DropDownList' value='Maria Anders' model={this.model}/>
     </div>
    );
  }
}
export default App;


