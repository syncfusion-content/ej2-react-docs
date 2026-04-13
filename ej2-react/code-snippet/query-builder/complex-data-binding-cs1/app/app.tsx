import { QueryBuilderComponent, ColumnsDirective, ColumnDirective, RuleChangeEventArgs  } from '@syncfusion/ej2-react-querybuilder';
import { RuleModel,  ColumnsModel } from '@syncfusion/ej2-querybuilder';
import { RadioButtonComponent, ButtonComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
        let qryBldrObj: QueryBuilderComponent;
        let importRules: RuleModel = {
            condition: 'and',
            rules: [{
                label: 'ID',
                field: 'Employee.ID',
                type: 'string',
                operator: 'equal',
                value: 0
            },
            {
                label: 'Last Name',
                field: 'Name.LastName',
                type: 'string',
                operator: 'contains',
                value: 'malan'
            },
            {
                condition: 'or',
                rules: [{
                    label: 'City',
                    field: 'Country.State.City',
                    operator: 'startswith',
                    type: 'string',
                    value: 'U'
                },
                {
                    label: 'Region',
                    field: 'Country.Region',
                    operator: 'endswith',
                    type: 'string',
                    value: 'c'
                },
                {
                    label: 'Name',
                    field: 'Country.Name',
                    operator: 'isnotempty'
                }]
            }],
        };
        let columns1: ColumnsModel[] = [
            { field: 'ID', label: 'ID', type: 'number'},
            { field: 'DOB', label: 'Date of birth', type: 'date'},
            { field: 'HireDate', label: 'Hire Date', type: 'date'},
            { field: 'Salary', label: 'Salary', type: 'number'},
            { field: 'Age', label: 'Age', type: 'number'},
            { field: 'Title', label: 'Title', type: 'string'}
        ];
        let columns2: ColumnsModel[]= [
            { field: 'FirstName', label: 'First Name', type: 'string'},
            { field: 'LastName', label: 'Last Name', type: 'string'}
        ];
        let columns3: ColumnsModel[]= [
            { field: 'State', label: 'State', columns : [
                { field: 'City', label: 'City', type: 'string'},
                { field: 'Zipcode', label: 'Zip Code', type: 'number'}] },
            { field: 'Region', label: 'Region', type: 'string'},
            { field: 'Name', label: 'Name', type: 'string'}
        ];
        function onReset(): void{
            qryBldrObj.reset();
        }
        function onSetsqlRules(): void{
            qryBldrObj.setRulesFromSql("Employee.ID = 0 AND Name.LastName LIKE ('%malan%') AND (Country.State.City LIKE ('U%') AND Country.Region LIKE ('%c') AND Country.Name IS NOT EMPTY)");
        }
        function onSetrules(): void{
            qryBldrObj.setRules(importRules);
        }
        return (<div>
            <div>
                <table>
                    <tr>
                        <td>  <ButtonComponent id="reset" className="e-control e-danger e-btn e-small" onClick={onReset}>Reset</ButtonComponent> </td>
                        <td>  <ButtonComponent id="rule" className="e-control e-success e-btn e-small" onClick={onSetsqlRules}>SetSqlRules</ButtonComponent></td>
                        <td> <ButtonComponent id="sql" className="e-control e-success e-btn e-small" onClick={onSetrules}>SetRules</ButtonComponent>  </td>
                    </tr>
                </table>
            </div>
            <QueryBuilderComponent width='100%' rule={importRules}  id='querybuilder' separator= "." enableNotCondition ="true" ref={(scope) => { qryBldrObj = scope; }} >
                <ColumnsDirective>
                    <ColumnDirective field="Employee" label="Employee" columns={columns1} />
                    <ColumnDirective field="Name" label="Name" columns={columns2} />
                    <ColumnDirective field="Country" label="Country" columns={columns3} />
                </ColumnsDirective>
            </QueryBuilderComponent>
        </div>);
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder-component'));