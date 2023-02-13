import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the JSON of data
    const sportsData = [
        { id: 'game1', sports: 'Badminton' },
        { id: 'game2', sports: 'Football' },
        { id: 'game3', sports: 'Tennis' }
    ];
    // maps the appropriate column to fields property
    const fields = { text: 'sports', value: 'id' };
    return (
    // specifies the tag for render the MultiSelect component
    <MultiSelectComponent id="mtselement" dataSource={sportsData} fields={fields} placeholder="Select a game"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
