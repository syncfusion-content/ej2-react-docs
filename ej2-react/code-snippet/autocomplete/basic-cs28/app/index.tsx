


import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // define the data with category
    private statusData: { [key: string]: Object }[] = [
        { "Status": "Open", "State": false },
        { "Status": "Waiting for Customer", "State": false },
        { "Status": "On Hold", "State": true },
        { "Status": "Follow-up", "State": false },
        { "Status": "Closed", "State": true },
        { "Status": "Solved", "State": false },
        { "Status": "Feature Request", "State": false }
    ];

    // map the groupBy field with Category column
    private fields: object = { value: 'Status', disabled: 'State' };

    public render() {
        return (
             // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="atcelement" fields={this.fields} dataSource={this.statusData} placeholder="Select Status" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


