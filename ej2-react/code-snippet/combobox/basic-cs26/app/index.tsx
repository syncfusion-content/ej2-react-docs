

import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // define the array of data
    const sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    return (
    // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" dataSource={sportsData} popupHeight="200px" popupWidth="250px" placeholder="select a game" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


