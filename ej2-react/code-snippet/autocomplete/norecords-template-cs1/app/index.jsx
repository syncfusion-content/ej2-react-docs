import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of data
    data = [];
    render() {
        return (
        // specifies the tag for render the AutoComplete component
        <AutoCompleteComponent id="atcelement" noRecordsTemplate={this.noRecordsTemplate = this.noRecordsTemplate.bind(this)} dataSource={this.data} placeholder="Find an item"/>);
    }
    // set the value to noRecords template
    noRecordsTemplate() {
        return (<span className='norecord'> NO DATA AVAILABLE</span>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
