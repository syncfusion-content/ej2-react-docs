import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the array of data
    const sportsData = ["BasketBall", "Cricket", "Football", "Golf"];
    // set the value to footer template
    function footerTemplate() {
        return (<span className='foot'> Total list items: {sportsData.length}</span>);
    }
    return (
    // specifies the tag for render the MultiSelect component
    <MultiSelectComponent id="mtselement" footerTemplate={footerTemplate} dataSource={sportsData} placeholder="Select a game"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
