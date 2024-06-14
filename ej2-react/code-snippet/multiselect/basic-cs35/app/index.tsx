

import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // define the data with category
    let tagData: { [key: string]: Object }[] = [
        { "Text": "Add to KB", "State": false },
        { "Text": "Crisis", "State": false },
        { "Text": "Enhancement", "State": true },
        { "Text": "Presale", "State": false },
        { "Text": "Needs Approval", "State": false },
        { "Text": "Approved", "State": true },
        { "Text": "Internal Issue", "State": true },
        { "Text": "Breaking Issue", "State": false },
        { "Text": "New Feature", "State": true },
        { "Text": "New Component", "State": false },
        { "Text": "Mobile Issue", "State": false }
    ];

    // map the groupBy field with Category column
    const fields: object = { value: 'Text', disabled: 'State' };
    return (
    // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="atcelement" fields={fields} dataSource={tagData} placeholder="Select Tags" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


