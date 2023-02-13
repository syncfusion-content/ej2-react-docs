import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of data
    sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    render() {
        return (
        // specifies the tag for render the AutoComplete component
        <AutoCompleteComponent id="atcelement" dataSource={this.sportsData} placeholder="Find a game"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
