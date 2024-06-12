import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the data with category
    let statusData = [
        { "Status": "Open", "State": false },
        { "Status": "Waiting for Customer", "State": false },
        { "Status": "On Hold", "State": true },
        { "Status": "Follow-up", "State": false },
        { "Status": "Closed", "State": true },
        { "Status": "Solved", "State": false },
        { "Status": "Feature Request", "State": false }
    ];
    // map the groupBy field with Category column
    const fields = { value: 'Status', disabled: 'State' };
    return (
    // specifies the tag for render the ComboBox component
    <ComboBoxComponent id="atcelement" fields={fields} dataSource={statusData} placeholder="Select Status"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
