import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { hardwareData } from './datasource.ts';
function App() {
    let columnData = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
    let importRules = {
        'condition': 'or',
        'rules': [{
                'field': 'Category',
                'label': 'Category',
                'operator': 'equal',
                'type': 'string',
                'value': 'Laptop'
            }]
    };
    return (<QueryBuilderComponent width='100%' enablePersistence={true} dataSource={hardwareData} columns={columnData} rule={importRules}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
