import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the array of data
    const data = [];
    // set the value to noRecords template
    function noRecordsTemplate(data) {
        return (<span className='norecord'> NO DATA AVAILABLE</span>);
    }
    return (
    // specifies the tag for render the ComboBox component
    <ComboBoxComponent id="comboelement" noRecordsTemplate={noRecordsTemplate = noRecordsTemplate.bind(this)} dataSource={data} placeholder="Select an item"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
