

import { Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { FilteringEventArgs, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

    // define the JSON of data
    const sportsData: { [key: string]: Object }[] = [
        { id: 'game1', sports: 'Badminton' },
        { id: 'game2', sports: 'Tennis' },
        { id: 'game3', sports: 'Football' }
    ];

    // maps the appropriate column to fields property
    const fields: object = { text: 'sports', value: 'id' };

    // sort the resulted items
    const sortOrder: SortOrder = 'Ascending';
    // filtering event handler to filter a customer

    function onFiltering(e: FilteringEventArgs){
        // load overall data when search key empty.
        if (e.text === '') {
            e.updateData(this.sportsData);
        } else {
            let query: Query = new Query().select(["sports", "id"]);
            // enable the case sensitive filtering by passing false to 4th parameter.
            query = (e.text !== '') ? query.where('sports', 'startsWith', e.text, false) : query;
            e.updateData(this.sportsData, query);
        }
    }

    return (
    // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="mtselement" dataSource={sportsData} fields={fields} placeholder="Select a game" allowFiltering={true} filtering={onFiltering = onFiltering.bind(this)} sortOrder={sortOrder} />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


