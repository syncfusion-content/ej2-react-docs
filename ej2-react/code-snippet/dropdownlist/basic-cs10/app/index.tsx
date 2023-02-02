

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

    // define the JSON of data
    const sportsData: { [key: string]: Object }[] = [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' }
    ];

    // maps the appropriate column to fields property
    const fields: object = { text: 'Game', value: 'Id' };

    return (
    // specifies the tag for render the DropDownList component
        <DropDownListComponent id="ddlelement" dataSource={sportsData} fields={fields} placeholder="Select a game" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


