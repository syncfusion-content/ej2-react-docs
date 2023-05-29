import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the array of data
    const sportsData = ["BasketBall", "Cricket", "Football", "Golf"];
    return (
    // specifies the tag for render the DropDownList component
    <DropDownListComponent id="ddlelement" footerTemplate={footerTemplate = footerTemplate.bind(this)} dataSource={sportsData} placeholder="Select a game"/>);
    // set the value to footer template
    function footerTemplate(data) {
        return (<span className='foot'/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
