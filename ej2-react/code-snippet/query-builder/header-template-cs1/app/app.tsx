


import { QueryBuilderComponent, ColumnsDirective, ColumnDirective  } from '@syncfusion/ej2-react-querybuilder';
import { RuleModel } from '@syncfusion/ej2-querybuider';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HeaderTemplate } from './template';
function App() {
    let qryBldrObj: QueryBuilderComponent;
    let importRules: RuleModel = {
            'condition': 'and', 'not': true,
            'rules': [{
                    'field': 'Age',
                    'label': 'Age',
                    'operator': 'equal',
                    'type': 'number',
                    'value': 30
                },
                {
                    'label': 'LastName',
                    'field': 'LastName',
                    'type': 'string',
                    'operator': 'equal',
                    'value': 'vinit'
                },
                {
                    'condition': 'or',
                    'rules': [{
                      'label': 'Age',
                      'field': 'Age',
                      'type': 'number',
                      'operator': 'equal',
                      'value': 34
                    }]
                }
            ]
        };
    function headerTemplate(props) {
        return (<HeaderTemplate {...props}/>);
    }

    return (<div>
        <QueryBuilderComponent width='100%' rule={importRules} headerTemplate= {headerTemplate} id='querybuilder' enableNotCondition ="true" >
            <ColumnsDirective>
                <ColumnDirective field="EmployeeID" label="Employee ID" type="number"/>
                <ColumnDirective field="LastName" label="Last Name" type="string"/>
                <ColumnDirective field="FirstName" label="First Name" type="string"/>
                <ColumnDirective field="Age" label="Age" type="number"/>
                <ColumnDirective field="City" label="City" type="string"/>
                <ColumnDirective field="Country" label="Country" type="string"/>
            </ColumnsDirective>
        </QueryBuilderComponent>
    </div>);
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder-component'));


