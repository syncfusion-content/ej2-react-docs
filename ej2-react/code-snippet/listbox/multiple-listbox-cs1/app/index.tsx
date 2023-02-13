


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
  let groupA: { [key: string]: Object }[] = [
    { "Name": "Australia", "Code": "AU" },
    { "Name": "Bermuda", "Code": "BM" },
    { "Name": "Canada", "Code": "CA" },
    { "Name": "Cameroon", "Code": "CM" },
    { "Name": "Denmark", "Code": "DK" },
    { "Name": "France", "Code": "FR" },
    { "Name": "Finland", "Code": "FI" },
    { "Name": "Germany", "Code": "DE" },
    { "Name": "Hong Kong", "Code": "HK" }
  ];

  let groupB: { [key: string]: Object }[] = [
    { "Name": "India", "Code": "IN" },
    { "Name": "Italy", "Code": "IT" },
    { "Name": "Japan", "Code": "JP" },
    { "Name": "Mexico", "Code": "MX" },
    { "Name": "Norway", "Code": "NO" },
    { "Name": "Poland", "Code": "PL" },
    { "Name": "Switzerland", "Code": "CH" },
    { "Name": "United Kingdom", "Code": "GB" },
    { "Name": "United States", "Code": "US" }
  ];

  let fields:object = { text:"Name"};

  return (
    <div className="wrapper">
    <div className="listbox1">
    <h4>Group A</h4>
    <ListBoxComponent dataSource={groupA} allowDragAndDrop="true" height="330px" scope="combined-list" fields={fields}/></div>
    <div className="listbox2">
    <h4>Group B</h4>
    <ListBoxComponent dataSource={groupB} allowDragAndDrop="true" height="330px" scope="combined-list" fields={fields} /></div>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));




