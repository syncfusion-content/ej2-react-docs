import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    let data = [
        { "id": 1, "name": "Steven Buchanan", "job": "General Manager", "hasChild": true, "expanded": true },
        { "id": 2, "pid": 1, "name": "Laura Callahan", "job": "Product Manager", "hasChild": true },
        { "id": 3, "pid": 2, "name": "Andrew Fuller", "job": "Team Lead", "hasChild": true },
        { "id": 4, "pid": 3, "name": "Anne Dodsworth", "job": "Developer" },
        { "id": 10, "pid": 3, "name": "Lilly", "job": "Developer", "status": "online" },
        { "id": 5, "pid": 1, "name": "Nancy Davolio", "job": "Product Manager", "hasChild": true },
        { "id": 6, "pid": 5, "name": "Michael Suyama", "job": "Team Lead", "hasChild": true },
        { "id": 7, "pid": 6, "name": "Robert King", "job": "Developer " },
        { "id": 11, "pid": 6, "name": "Mary", "job": "Developer " },
        { "id": 9, "pid": 1, "name": "Janet Leverling", "job": "HR" }
    ];
    let fields = { dataSource: data, value: 'id', text: 'name', parentValue: "pid", hasChildren: 'hasChild' };
    let showCheckBox = true;
    let treeSettings = { autoCheck: true };
    let customTemplate = "Selected items count: ${value.length} item(s) ";
    return (<DropDownTreeComponent fields={fields} treeSettings={treeSettings} customTemplate={customTemplate} showCheckBox={showCheckBox} mode="Custom" placeholder="Select an employee" popupHeight="200px"/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
