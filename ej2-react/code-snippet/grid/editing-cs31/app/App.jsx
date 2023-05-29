import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { Query } from '@syncfusion/ej2-data';
import { employeeDetails } from './datasource';
window.role = '';
function App() {
    let gridInstance;
    const jobRole = [
        { role: 'TeamLead', destId: '0' },
        { role: 'Manager', destId: '1' },
        { role: 'Engineer', destId: '2' },
        { role: 'Sales', destId: '3' },
        { role: 'Support', destId: '4' },
    ];
    const salaryDetails = [
        { salary: '11000', destId: '1' },
        { salary: '13500', destId: '2' },
        { salary: '16500', destId: '2' },
        { salary: '18500', destId: '1' },
        { salary: '21500', destId: '2' },
        { salary: '23000', destId: '2' },
    ];
    const load = () => {
        let instance = document.getElementById('grid');
        if (instance) {
            let column = instance.ej2_instances[0].getColumnByField('Salary');
            column.validationRules = {
                required: [customFn, window['Please enter valid salary']],
            };
        }
    };
    const customFn = (args) => {
        switch (window['role']) {
            case 'Engineer':
                if (args.value > 10000 && args.value < 15000) {
                    return true;
                }
                else {
                    rules['Salary']['required'][1] = 'Please enter valid Engineer Salary';
                }
                break;
            case 'TeamLead':
                if (args.value > 15000 && args.value < 20000) {
                    return true;
                }
                else {
                    rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary';
                }
                break;
            case 'Manager':
                if (args.value > 20000 && args.value < 25000) {
                    return true;
                }
                else {
                    rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
                }
                break;
            case 'Sales':
                if (args.value > 5000 && args.value < 25000) {
                    return true;
                }
                else {
                    rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
                }
                break;
            case 'Support':
                if (args.value > 10000 && args.value < 19000) {
                    return true;
                }
                else {
                    rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
                }
                break;
        }
        return false;
    };
    const valChange = (args) => {
        window['role'] = args.value;
    };
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const roleParams = {
        params: {
            allowFiltering: true,
            dataSource: jobRole,
            fields: { value: 'role', text: 'role' },
            query: new Query(),
            change: valChange
        }
    };
    const salaryParams = {
        params: {
            allowFiltering: true,
            dataSource: salaryDetails,
            fields: { value: 'salary', text: 'salary' },
            query: new Query()
        }
    };
    return (<div><GridComponent id='grid' ref={grid => gridInstance = grid} dataSource={employeeDetails} editSettings={editOptions} toolbar={toolbarOptions} load={load}>
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='Role' headerText='Role' width='160' editType='dropdownedit' edit={roleParams}/>
      <ColumnDirective field='Salary' headerText='Salary' width='160' editType='dropdownedit' edit={salaryParams}/>
      <ColumnDirective field='Address' headerText='Address' width='160'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent></div>);
}
;
export default App;
