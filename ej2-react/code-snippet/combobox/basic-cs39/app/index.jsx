import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of string
    sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Snooker', 'Tennis'];
    render() {
        return (
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" dataSource={this.sportsData} placeholder="Select a game" debounceDelay={300}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
