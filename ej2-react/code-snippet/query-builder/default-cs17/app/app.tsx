

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { QueryBuilderComponent, ColumnsModel, RuleModel } from '@syncfusion/ej2-react-querybuilder';
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
        'label': 'EmployeeID',
        'field': 'EmployeeID',
        'type': 'number',
        'operator': 'notequal',
        'value': '5'
    },
    {
        'condition': 'or',
        'rules': [{
        'label': 'Title Of Courtesy',
        'field': 'TitleOfCourtesy',
        'type': 'string',
        'operator': 'equal',
        'value': 'Mr.'
        },
        {
        'label': 'Country',
        'field': 'Country',
        'type': 'string',
        'operator': 'equal',
        'value': 'USA'
        },
        {
        'condition': 'and',
        'rules': [{
        'label': 'City',
        'field': 'City',
        'type': 'string',
        'operator': 'equal',
        'value': 'London'
            }]
        }]
    }]
    }

    return (
            <QueryBuilderComponent width='30%' dataSource={employeeData} columns={columnData} rule={importRules} summaryView="true" ></QueryBuilderComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


