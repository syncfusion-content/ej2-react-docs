


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

function App() {
  
  let fields: object = { text:'FirstName', value:'EmployeeID'};
  let data:DataManager = new DataManager({
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees'
  });
  return (
      // specifies the tag for render the ListBox component
    <ListBoxComponent dataSource={data} fields={fields} />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



