{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from '../datasource.ts';
function App() {
    let qryBldrObj;
    let ButtonOptions = {
        groupDelete: true,
        groupInsert: true,
        ruleDelete: true
    };
    let columnData = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
        { field: 'FirstName', label: 'First Name', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];
    let importRules = {
        'condition': 'and',
        'rules': [{
                'field': 'EmployeeID',
                'label': 'EmployeeID',
                'operator': 'equal',
                'type': 'number',
                'value': 1001
            },
            {
                'field': 'Title',
                'label': 'Title',
                'operator': 'equal',
                'type': 'string',
                'value': 'Sales Manager'
            }]
    };
    function addGroup() {
        qryBldrObj.addGroups([{ 'condition': 'and', 'rules': [{ 'label': 'First Name', 'field': 'FirstName', 'type': 'string', 'operator': 'startswith', 'value': 'v' }] }], 'group0');
    }
    function addRule() {
        qryBldrObj.addRules([{ 'label': 'City', 'field': 'City', 'type': 'string', 'operator': 'equal', 'value': 'US' }], 'group0');
    }
    function deleteGroup() {
        qryBldrObj.deleteGroups(['group1']);
    }
    return (<div>
            <QueryBuilderComponent width='100%' dataSource={employeeData} columns={columnData} rule={importRules} ref={(scope) => { qryBldrObj = scope; }} showButtons={ButtonOptions}/>
            <div className="e-qb-button">
                <ButtonComponent id="addgroup" cssClass='e-primary' content='Add Group' onClick={addGroup}/>
                <ButtonComponent id="addrules" cssClass='e-primary' content='Add Rule' onClick={addRule}/>
                <ButtonComponent id="deletegroups" cssClass='e-primary' content='Delete Group' onClick={deleteGroup}/>
            </div>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
{% endraw %}