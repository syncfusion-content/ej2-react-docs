import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of data
    sportsData = ["BasketBall", "Cricket", "Football", "Golf"];
    render() {
        return (
        // specifies the tag for render the DropDownList component
        <DropDownListComponent id="ddlelement" footerTemplate={this.footerTemplate = this.footerTemplate.bind(this)} dataSource={this.sportsData} placeholder="Select a game"/>);
    }
    // set the value to footer template
    footerTemplate(data) {
        return (<span className='foot'/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
