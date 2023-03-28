import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
function App() {
    //define the array of JSON
    let settings = [
        {
            Name: "Display",
            id: "list-01"
        },
        {
            Name: "Notification",
            id: "list-02"
        },
        {
            Name: "Sound",
            id: "list-03"
        },
        {
            Name: "Apps",
            id: "list-04"
        },
        {
            Name: "Storage",
            id: "list-05"
        },
        {
            Name: "Battery",
            id: "list-06"
        }
    ];
    let fields = { text: "Name", tooltip: "Name", id: "id" };
    return (
    // specifies the tag to render the ListView component
    <ListViewComponent id="list" dataSource={settings} fields={fields} showHeader={true} headerTitle="Device settings"/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
