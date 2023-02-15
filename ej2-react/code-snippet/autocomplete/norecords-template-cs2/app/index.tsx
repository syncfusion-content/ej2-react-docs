

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // define the array of data
    const data: { [key: string]: Object }[] = [];

    return (
    // specifies the tag for render the AutoComplete component
        <AutoCompleteComponent id="atcelement" noRecordsTemplate={noRecordsTemplate = noRecordsTemplate.bind(this)} dataSource={data} placeholder="Find an item"/>
    );

    // set the value to noRecords template
    function noRecordsTemplate(): JSX.Element {
      return (
            <span className='norecord'> NO DATA AVAILABLE</span>
        );
      }
}
ReactDOM.render(<App />, document.getElementById('sample'));


