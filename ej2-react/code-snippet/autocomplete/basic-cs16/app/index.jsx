import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // bind the DataManager instance to dataSource property
    const searchData = ['ram', 'Ravi', 'suresh', 'Suresh'];
    // maps the appropriate column to fields property
    const fields = { value: "ContactName" };
    // sort the resulted items
    const sortOrder = 'Ascending';
    return (
    // specifies the tag for render the AutoComplete component
    <AutoCompleteComponent id="atcelement" dataSource={searchData} filterType="StartsWith" sortOrder={sortOrder} fields={fields} placeholder="eg: Ravi" ignoreCase={false}/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
