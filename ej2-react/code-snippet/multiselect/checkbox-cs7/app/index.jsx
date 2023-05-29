import { CheckBoxSelection, Inject, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the JSON of data
    sportsData = [
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
    fields = { text: 'Game', value: 'Id' };
    render() {
        return (
        // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="checkbox" dataSource={this.sportsData} fields={this.fields} placeholder="Select game" mode="CheckBox" enableSelectionOrder={false}>
                <Inject services={[CheckBoxSelection]}/>
            </MultiSelectComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
