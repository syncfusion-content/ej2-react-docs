import { QueryBuilderComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    let field = {
        allowFiltering: true,
        popupHeight: '400px'
    };
    let operator = {
        allowFiltering: true,
        popupHeight: '400px'
    };
    let value = {
        numericTextBoxModel: {
            cssClass: 'e-custom'
        },
        multiSelectModel: {
            cssClass: 'e-custom'
        },
        datePickerModel: {
            cssClass: 'e-custom'
        },
        textBoxModel: {
            cssClass: 'e-custom'
        },
        radioButtonModel: {
            cssClass: 'e-custom'
        }
    };
    let importRules = {
        'condition': 'and',
        'rules': [{
                'label': 'Employee ID',
                'field': 'EmployeeID',
                'type': 'number',
                'operator': 'equal',
                'value': 1001
            }]
    };
    return (<div>
        <QueryBuilderComponent width='100%' rule={importRules} id='querybuilder' enableNotCondition="true" fieldModel={field} operatorModel={operator} valueModel={value}>
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
ReactDom.render(<App />, document.getElementById('querybuilder-component'));
