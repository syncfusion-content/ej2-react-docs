import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the array of string
    const sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Snooker', 'Tennis'];
    return (
    // specifies the tag for render the MultiSelect component
    <MultiSelectComponent id="mtselement" dataSource={sportsData} placeholder="Select a game" debounceDelay={300}/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
