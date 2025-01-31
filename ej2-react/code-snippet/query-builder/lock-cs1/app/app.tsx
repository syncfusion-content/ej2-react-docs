

import { ColumnsModel, QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from './datasource';

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

    function lockGroup(): void {
        qryBldrObj.lockGroup("querybuilder_group0");
    }

    function lockRule(): void {
        qryBldrObj.lockRule("querybuilder_group0_rule0");
    }

    return (<div>
         <QueryBuilderComponent id="querybuilder" width='100%' dataSource={employeeData} ref={(scope) => { qryBldrObj = scope as QueryBuilderComponent; }} columns={columnData} rule={importRules} showButtons={{lockGroup: false, lockRule: false}} />
        <div className="e-qb-button">
            <ButtonComponent id="lockgroup" cssClass='e-primary' content='Lock Group' onClick = {lockGroup}/>
            <ButtonComponent id="lockrule" cssClass='e-primary' content='Lock Rule' onClick = {lockRule}/>
        </div>
    </div>
        
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


