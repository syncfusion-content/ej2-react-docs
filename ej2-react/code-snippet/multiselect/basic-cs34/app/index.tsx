


import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // define the data with category
    private tagData: { [key: string]: Object }[] = [
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
    private fields: object = { value: 'Text', disabled: 'State' };

    public render() {
        return (
             // specifies the tag for render the MultiSelect component
            <MultiSelectComponent id="atcelement" fields={this.fields} dataSource={this.tagData} placeholder="Select Tags" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


