

import { ColumnsModel, QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from '../datasource.ts';

function App() {
    let qryBldrObj: QueryBuilderComponent;
    let columnData: ColumnsModel[] =  [
        { field: 'EmployeeID', label: 'Employee ID', type: 'number'},
        { field: 'FirstName', label: 'First Name', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'Hire Date', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];

    let importRules: RuleModel = {
        'condition': 'and',
        'rules': [{
            'label': 'Employee ID',
            'field': 'EmployeeID',
            'type': 'number',
            'operator': 'equal',
            'value': 1001
        },
        {
            'label': 'Title',
            'field': 'Title',
            'type': 'string',
            'operator': 'equal',
            'value': 'Sales Manager'
        },
        {
            condition: "or", rules: [
                { 'label': 'Title',
                'field': 'Title',
                'type': 'string',
                'operator': 'equal',
                'value': 'Engineer' }
            ]
        }
      ]
    };

    function cloneGroup(): void {
        qryBldrObj.cloneGroup("querybuilder_group0", "querybuilder_group1", 1);
    }

    function cloneRule(): void {
        qryBldrObj.cloneRule("querybuilder_group0_rule0", "querybuilder_group0", 1);
    }

    return (
        <div>
            <QueryBuilderComponent width='100%' dataSource={employeeData} ref={(scope) => { qryBldrObj = scope as QueryBuilderComponent; }} columns={columnData} rule={importRules} showButtons={{cloneGroup: true, cloneRule: true}}/>
            <div className="e-qb-button">
                <ButtonComponent id="clonegroup" cssClass='e-primary' content='Clone Group' onClick = {cloneGroup}/>
                <ButtonComponent id="clonerule" cssClass='e-primary' content='Clone Rule' onClick = {cloneRule}/>
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


