import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of data
    sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    render() {
        return (
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" dataSource={this.sportsData} popupHeight="200px" popupWidth="250px" placeholder="select a game"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
