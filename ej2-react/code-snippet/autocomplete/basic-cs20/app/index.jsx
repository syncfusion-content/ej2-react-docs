import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the array of data
    const sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    return (
    // specifies the tag for render the AutoComplete component
    <AutoCompleteComponent id="atcelement" dataSource={sportsData} popupHeight="250px" popupWidth="250px" placeholder="Find a game"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
