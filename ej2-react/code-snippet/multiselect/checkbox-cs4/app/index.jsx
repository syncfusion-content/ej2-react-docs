import { CheckBoxSelection, Inject, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the JSON of data
    const sportsData = [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' },
        { Id: 'game4', Game: 'Golf' },
        { Id: 'game5', Game: 'Cricket' },
        { Id: 'game6', Game: 'Handball' },
        { Id: 'game7', Game: 'Karate' },
        { Id: 'game8', Game: 'Fencing' },
        { Id: 'game9', Game: 'Boxing' }
    ];
    // maps the appropriate column to fields property
    const fields = { text: 'Game', value: 'Id' };
    return (
    // specifies the tag for render the MultiSelect component
    <MultiSelectComponent id="checkbox" dataSource={sportsData} fields={fields} placeholder="Select game" mode="CheckBox" selectAllText="Select All" unSelectAllText="unSelect All" showSelectAll={true}>
            <Inject services={[CheckBoxSelection]}/>
        </MultiSelectComponent>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
