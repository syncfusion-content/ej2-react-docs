

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // define the array of string
    const sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Snooker', 'Tennis'];

    return (
    // specifies the tag for render the AutoComplete component
        <AutoCompleteComponent id="atcelement" dataSource={sportsData} placeholder="Find a game" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


