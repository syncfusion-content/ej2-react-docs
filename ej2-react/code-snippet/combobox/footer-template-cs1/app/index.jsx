import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of data
    sportsData = ["BasketBall", "Cricket", "Football", "Golf"];
    // set the value to footer template
    footerTemplate(data) {
        return (<span className='foot'/>);
    }
    render() {
        return (
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" footerTemplate={this.footerTemplate} dataSource={this.sportsData} placeholder="Select a game"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
