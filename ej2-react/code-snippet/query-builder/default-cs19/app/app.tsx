{% raw %}


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnsModel, QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { hardwareData } from './datasource';

function App() {
    let qryBldrObj: QueryBuilderComponent;

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

    function onClick(): void {
        qryBldrObj.setRules(importRules);
    }
    return (
        <div>
            <QueryBuilderComponent width='100%' dataSource={hardwareData}  ref={(scope) => { qryBldrObj = scope as QueryBuilderComponent; }} columns={columnData}/>
            <div className="e-qb-button">
                <ButtonComponent id="importrules" cssClass='e-primary' content='Set Rules' onClick = {onClick}/>
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


{% endraw %}