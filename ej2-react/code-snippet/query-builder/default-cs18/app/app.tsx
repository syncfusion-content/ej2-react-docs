

import { ColumnsModel, QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { hardwareData } from './datasource.ts';

function App() {

    let columnData: ColumnsModel[] = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];

    let importRules: RuleModel = {
        'condition': 'or',
        'rules': [{
            'field': 'Category',
            'label': 'Category',
            'operator': 'equal',
            'type': 'string',
            'value': 'Laptop'
        },
        {
        'condition': 'and',
            'rules': [{
                'field': 'Status',
                'label': 'Status',
                'operator': 'notequal',
                'type': 'string',
                'value': 'Pending'
            },
            {
                'field': 'TaskID',
                'label': 'Task ID',
                'operator': 'equal',
                'type': 'number',
                'value': 5675
            }]
        }]
    };
  
    return (
        <QueryBuilderComponent width='100%' dataSource={hardwareData} columns={columnData}  rule={importRules}/>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


