import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
//import DataManager related classes
import { DataManager, Query } from '@syncfusion/ej2-data';
function App() {
  //bind the DataManager instance to dataSource property
  let data = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/',
    crossDomain: true
  });
  //bind the Query instance to query property
  let query = new Query().from('ListView').select('EmployeeID,FirstName').take(10);
  //map the appropriate columns to fields property
  let fields = {
    id: 'EmployeeID',
    text: 'FirstName'
  };
  return (
    // specifies the tag to render the ListView component
    <ListViewComponent id="list" dataSource={data} fields={fields} query={query} showHeader={true} headerTitle="Employees" />);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
