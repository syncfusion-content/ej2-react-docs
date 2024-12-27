import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    let data = [];
    let fields = { dataSource: data, value: 'id', text: 'name', parentValue: "pid", hasChildren: 'hasChild' };
    function noRecordsTemplate() {
        return (<div className='norecord'> NO DATA AVAILABLE </div>);
    }
    return (<DropDownTreeComponent fields={fields} placeholder="Select an employee" noRecordsTemplate={noRecordsTemplate} popupHeight="270px" />);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
