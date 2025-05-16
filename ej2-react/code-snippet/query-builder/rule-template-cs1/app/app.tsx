import { getComponent, setValue } from '@syncfusion/ej2-base';
import { ChangeEventArgs, DropDownList } from '@syncfusion/ej2-react-dropdowns';
import { QueryBuilderComponent, ColumnsDirective, ColumnDirective, RuleModel, ActionEventArgs } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from './datasource';
import { AgeTemplate } from './template';

function App() {
    let qryBldrObj: QueryBuilderComponent;
    let elem: HTMLElement;

    let importRules: RuleModel = {
            'condition': 'or',
            'rules': [{
                'field': 'Age',
                'label': 'Age',
                'operator': 'greaterthanorequal',
                'type': 'number',
                'value': 30
            }]
    };

    function ageTemplate(props): any {
      return (<AgeTemplate {...props} />);
    }

    function actionBegin(args: ActionEventArgs): void {
      let ruleID = args.ruleID;
      args.rule.operator = 'greaterthanorequal';
      if (args.requestType === 'template-initialize') {
        if (args.rule.value === '') {
          args.rule.value = 30;
        }
      }
    }

    return (
        <QueryBuilderComponent dataSource={employeeData} width='100%' rule={importRules} ref={(scope) => { qryBldrObj = scope as QueryBuilderComponent; }} actionBegin={actionBegin} id='querybuilder'>
            <ColumnsDirective>
                <ColumnDirective field="EmployeeID" label="Employee ID" type="number"/>
                <ColumnDirective field="LastName" label="Last Name" type="string"/>
                <ColumnDirective field="FirstName" label="First Name" type="string"/>
                <ColumnDirective field="Age" label="Age" type="number" ruleTemplate={ageTemplate}/>
                <ColumnDirective field="City" label="City" type="string"/>
                <ColumnDirective field="Country" label="Country" type="string"/>
            </ColumnsDirective>
        </QueryBuilderComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder-component'));
