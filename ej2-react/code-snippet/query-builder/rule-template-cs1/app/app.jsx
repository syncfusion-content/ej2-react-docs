{% raw %}
import { QueryBuilderComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from './datasource';
import { AgeTemplate } from './template';
function App() {
    let qryBldrObj;
    let elem;
    let importRules = {
        'condition': 'or',
        'rules': [{
                'field': 'Age',
                'label': 'Age',
                'operator': 'greaterthanorequal',
                'type': 'number',
                'value': 30
            }]
    };
    function ageTemplate(props) {
        return (<AgeTemplate {...props}/>);
    }
    function actionBegin(args) {
        let ruleID = args.ruleID;
        args.rule.operator = 'greaterthanorequal';
        if (args.requestType === 'template-initialize') {
            if (args.rule.value === '') {
                args.rule.value = 30;
            }
        }
    }
    return (<QueryBuilderComponent dataSource={employeeData} width='100%' rule={importRules} ref={(scope) => { qryBldrObj = scope; }} actionBegin={actionBegin} id='querybuilder'>
            <ColumnsDirective>
                <ColumnDirective field="EmployeeID" label="Employee ID" type="number"/>
                <ColumnDirective field="LastName" label="Last Name" type="string"/>
                <ColumnDirective field="FirstName" label="First Name" type="string"/>
                <ColumnDirective field="Age" label="Age" type="number" ruleTemplate={ageTemplate}/>
                <ColumnDirective field="City" label="City" type="string"/>
                <ColumnDirective field="Country" label="Country" type="string"/>
            </ColumnsDirective>
        </QueryBuilderComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder-component'));
{% endraw %}