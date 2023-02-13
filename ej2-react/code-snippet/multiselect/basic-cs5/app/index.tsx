


import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    // define the JSON of data
    private sportsData: { [key: string]: Object }[] = [
        { id: 'game1', sports: 'Badminton' },
        { id: 'game2', sports: 'Football' },
        { id: 'game3', sports: 'Tennis' }
    ];

    // maps the appropriate column to fields property
    private fields: object = { text: 'sports', value: 'id' };

    public render() {
        return (
             // specifies the tag for render the MultiSelect component
            <MultiSelectComponent id="mtselement" dataSource={this.sportsData} fields={this.fields} placeholder="Select a game" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


