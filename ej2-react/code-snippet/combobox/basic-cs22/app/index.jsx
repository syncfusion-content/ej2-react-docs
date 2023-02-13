import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the array of data
    const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return (
    // specifies the tag for render the ComboBox component
    <ComboBoxComponent id="comboelement" dataSource={sportsData} placeholder="Select a game"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
