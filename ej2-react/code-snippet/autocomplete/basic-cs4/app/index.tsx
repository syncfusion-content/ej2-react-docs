

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

    // define the JSON of data
    const sportsData: { [key: string]: Object }[] = [
       { id: 'Game1', game: 'Badminton' },
       { id: 'Game2', game: 'Basketball' },
       { id: 'Game3', game: 'Cricket' },
       { id: 'Game4', game: 'Football' },
       { id: 'Game5', game: 'Golf' },
       { id: 'Game6', game: 'Hockey' },
       { id: 'Game7', game: 'Rugby' },
       { id: 'Game8', game: 'Snooker' }
    ];

    // maps the appropriate column to fields property
    const fields: object = { value: 'game' };
        return (
             // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="atcelement" dataSource={sportsData} fields={fields} placeholder="Find a game" />
        );
}
ReactDOM.render(<App />, document.getElementById('sample'));


