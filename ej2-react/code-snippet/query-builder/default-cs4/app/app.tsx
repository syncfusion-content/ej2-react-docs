

import { ColumnsModel, QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from '../datasource.ts';

function App() {

    let columnData: ColumnsModel[] = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number'},
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];
    let importRules: RuleModel = {
        'condition': 'and',
        'rules': [{
            'field': 'EmployeeID',
            'label': 'EmployeeID',
            'operator': 'equal',
            'type': 'number',
            'value': 1
        },
        {
            'field': 'Title',
            'label': 'Title',
            'operator': 'equal',
            'type': 'string',
            'value': 'Sales Manager'
        }]
    };

    return (
            <QueryBuilderComponent width='100%' dataSource={employeeData} columns={columnData} rule={importRules} />
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


