


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
  // define the array of object
  let data: { [key: string]: Object }[] = [
    { id: 'game1', sports: { Name: 'Badminton'} },
    { id: 'game2', sports: { Name: 'Cricket'} },
    { id: 'game3', sports: { Name: 'Football'} },
    { id: 'game4', sports: { Name: 'Golf'} },
    { id: 'game5', sports: { Name: 'Tennis'} },
    { id: 'game6', sports: { Name: 'Basket Ball'} },
    { id: 'game7', sports: { Name: 'Base Ball'} },
    { id: 'game8', sports: { Name: 'Hockey'} },
    { id: 'game9', sports: { Name: 'Volley Ball'} }
  ];

  let fields: object = { text:"sports.Name", value:"id"};
  return (
    <ListBoxComponent dataSource={data} fields={fields} />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



