

import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // define the data with category
    let statusData: { [key: string]: Object }[] = [
        { "Status": "Open", "State": false },
        { "Status": "Waiting for Customer", "State": false },
        { "Status": "On Hold", "State": true },
        { "Status": "Follow-up", "State": false },
        { "Status": "Closed", "State": true },
        { "Status": "Solved", "State": false },
        { "Status": "Feature Request", "State": false },
        { "Status": "In Progress", "State": false },
        { "Status": "Pending", "State": true },
        { "Status": "Escalated", "State": true },
        { "Status": "New", "State": false },
        { "Status": "Under Review", "State": true },
        { "Status": "Reopened", "State": false },
        { "Status": "Approved", "State": true },
        { "Status": "Awaiting Approval", "State": false },
        { "Status": "Scheduled", "State": false },
        { "Status": "Canceled", "State": true },
        { "Status": "Completed", "State": true },
        { "Status": "Acknowledged", "State": false },
        { "Status": "In Development", "State": false }
    ];

    // map the groupBy field with Category column
    const fields: object = { value: 'Status'};
    // set true for enable the resize property to AutoComplete
    let allowResize = true;
    return (
    // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="atcelement" allowResize={allowResize} fields={fields} dataSource={statusData} placeholder="Select Status" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


