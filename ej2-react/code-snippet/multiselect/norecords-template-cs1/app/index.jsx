import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of data
    data = [];
    // set the value to noRecords template
    noRecordsTemplate(data) {
        return (<span className='norecord'> NO DATA AVAILABLE</span>);
    }
    render() {
        return (
        // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="mtselement" noRecordsTemplate={this.noRecordsTemplate = this.noRecordsTemplate.bind(this)} dataSource={this.data} placeholder="Select an item"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
