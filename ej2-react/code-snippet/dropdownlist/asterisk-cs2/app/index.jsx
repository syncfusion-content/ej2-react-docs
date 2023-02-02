import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the array of data
    const sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    return (
    // specifies the tag for render the AutoComplete component
    <AutoCompleteComponent id="atcelement" dataSource={sportsData} placeholder="Find a game" floatLabelType="auto"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
