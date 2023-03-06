

import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // define the array of data
    const data: string[] = [];

    // set the value to noRecords template
     function noRecordsTemplate(data: any): any {
      return (
      <span className='norecord'> NO DATA AVAILABLE</span>
        );
    }
    return (
    // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="mtselement" noRecordsTemplate={noRecordsTemplate} dataSource={data} placeholder="Select an item" />
    );
}

ReactDOM.render(<App />, document.getElementById('sample'));


