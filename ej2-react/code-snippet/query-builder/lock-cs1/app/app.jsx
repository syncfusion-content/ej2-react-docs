import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from './datasource';
function App() {
    let qryBldrObj;
    let columnData = [
        { field: 'EmployeeID', label: 'Employee ID', operators: [{ key: 'Equal', value: 'equal' },
                { key: 'Greater than', value: 'greaterthan' }, { key: 'Less than', value: 'lessthan' }], step: 10, type: 'number' },
        { field: 'FirstName', label: 'First Name', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'Hire Date', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];
    let importRules = {
        'condition': 'and',
        'rules': [{
                'field': 'EmployeeID',
                'label': 'Employee ID',
                'operator': 'equal',
                'type': 'number',
                'value': 1001
            },
            {
                'field': 'HireDate',
                'label': 'Hire Date',
                'operator': 'equal',
                'type': 'date',
                'value': '07/05/1991'
            },
            {
                'field': 'Title',
                'label': 'Title',
                'operator': 'equal',
                'type': 'string',
                'value': 'Sales Manager'
            }]
    };
    function lockGroup() {
        qryBldrObj.lockGroup("querybuilder_group0");
    }
    function lockRule() {
        qryBldrObj.lockRule("querybuilder_group0_rule0");
    }
    return (<div>
        <QueryBuilderComponent id="querybuilder" width='100%' dataSource={employeeData} ref={(scope) => { qryBldrObj = scope; }} rule={importRules} columns={columnData} showButtons={{lockGroup: false, lockRule: false}}/>
        <div className="e-qb-button">
            <ButtonComponent id="lockgroup" cssClass='e-primary' content='Lock Group' onClick={lockGroup}/>
            <ButtonComponent id="lockrule" cssClass='e-primary' content='Lock Rule' onClick={lockRule}/>
        </div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
