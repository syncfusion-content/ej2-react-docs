import { Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the JSON of data
    sportsData = [
        { id: 'game1', sports: 'Badminton' },
        { id: 'game2', sports: 'Tennis' },
        { id: 'game3', sports: 'Football' }
    ];
    // maps the appropriate column to fields property
    fields = { text: 'sports', value: 'id' };
    // sort the resulted items
    sortOrder = 'Ascending';
    // filtering event handler to filter a customer
    onFiltering = (e) => {
        // load overall data when search key empty.
        if (e.text === '') {
            e.updateData(this.sportsData);
        }
        else {
            let query = new Query().select(["sports", "id"]);
            // enable the case sensitive filtering by passing false to 4th parameter.
            query = (e.text !== '') ? query.where('sports', 'startsWith', e.text, false) : query;
            e.updateData(this.sportsData, query);
        }
    };
    render() {
        return (
        // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="mtselement" dataSource={this.sportsData} fields={this.fields} placeholder="Select a game" allowFiltering={true} filtering={this.onFiltering = this.onFiltering.bind(this)} sortOrder={this.sortOrder}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
