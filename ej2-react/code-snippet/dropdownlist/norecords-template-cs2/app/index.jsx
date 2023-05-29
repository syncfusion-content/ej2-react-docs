import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the array of data
    const data = [];
    return (
    // specifies the tag for render the DropDownList component
    <DropDownListComponent id="ddlelement" noRecordsTemplate={noRecordsTemplate = noRecordsTemplate.bind(this)} dataSource={data} placeholder="Select an item"/>);
    // set the value to noRecords template
    function noRecordsTemplate(data) {
        return (<span className='norecord'> NO DATA AVAILABLE</span>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
