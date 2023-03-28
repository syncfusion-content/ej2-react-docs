import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
function App() {
    let groupA = [
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
    let groupB = [
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
    let fields = { text: "Name" };
    let toolbar = { items: ["moveUp", "moveDown", "moveTo", "moveFrom", "moveAllTo", "moveAllFrom"] };
    return (<div className="wrapper">
    <div className="listbox1">
    <ListBoxComponent dataSource={groupA} fields={fields} scope="#listbox" toolbarSettings={toolbar}/></div>
    <div className="listbox2">
    <ListBoxComponent id="listbox" dataSource={groupB} fields={fields}/>
    </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
