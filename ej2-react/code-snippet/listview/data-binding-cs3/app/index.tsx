


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
//import DataManager related classes
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

function App() {
  //bind the DataManager instance to dataSource property
  let data = new DataManager({ url: "//js.syncfusion.com/ejServices/Wcf/Northwind.svc/", crossDomain: true });

  //bind the Query instance to query property
  let query = new Query()
    .from("Products")
    .select("ProductID,ProductName")
    .take(6);

  //map the appropriate columns to fields property
  let fields = { id: "ProductID", text: "ProductName" };

  return (
    // specifies the tag to render the ListView component
    <ListViewComponent
      id="list"
      dataSource={data}
      fields={fields}
      query={query}
      showHeader={true}
      headerTitle="Product Name"
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


