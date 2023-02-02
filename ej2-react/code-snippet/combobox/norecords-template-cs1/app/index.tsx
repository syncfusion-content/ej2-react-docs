


import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // define the array of data
    private data: string[] = [];

    // set the value to noRecords template
     public noRecordsTemplate(data: any): JSX.Element {
      return (
       <span className='norecord'> NO DATA AVAILABLE</span>
        );
      }
    public render() {
        return (
            // specifies the tag for render the ComboBox component
            <ComboBoxComponent id="comboelement" noRecordsTemplate={this.noRecordsTemplate = this.noRecordsTemplate.bind(this)} dataSource={this.data} placeholder="Select an item" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


