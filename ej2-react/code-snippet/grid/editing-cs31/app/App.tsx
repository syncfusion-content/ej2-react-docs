import { ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns'
import { ColumnDirective, ColumnsDirective, EditEventArgs, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems, IEditCell } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { Query } from '@syncfusion/ej2-data';
import { employeeDetails } from './datasource';
declare global {
  interface Window {
    role: string;
  }
}

function App() {
  let grid: GridComponent | null;
  const jobRole: { [key: string]: Object }[] = [
    { role: 'TeamLead' },
    { role: 'Manager' },
    { role: 'Engineer' },
    { role: 'Sales' },
    { role: 'Support' },
  ];

  const salaryDetails: { [key: string]: Object }[] = [
    { salary: 6000 },
    { salary: 17000 },
    { salary: 18000 },
    { salary: 26000 },
    { salary: 25000 },
    { salary: 40000 },
    { salary: 35000 },
    { salary: 55000 },
    { salary: 65000 },
  ];
  const customFn = (args: { value: number }): boolean => {
    const formObj = (grid as GridComponent).editModule.formObj.element['ej2_instances'][0];
    switch (window.role) {
      case 'Sales':
        if ((args.value >= 5000) && (args.value < 15000))
          return true;
        else
          formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

        break;

      case 'Support':
        if ((args.value >= 15000 && args.value < 19000))
          return true;
        else
          formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

        break;

      case 'Engineer':
        if ((args.value >= 25000 && args.value < 30000))
          return true;
        else
          formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

        break;

      case 'TeamLead':
        if ((args.value >= 30000) && (args.value < 50000))
          return true;
        else
          formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

        break;

      case 'Manager':
        if ((args.value >= 50000) && (args.value < 70000))
          return true;
        else
          formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

        break;

    }
    return false;
  };
  const valChange = (args: ChangeEventArgs) => {
    window.role = (args.value.toString() as string); // Explicitly cast args.value to string
    const formObj = (grid as GridComponent).editModule.formObj.element['ej2_instances'][0];

    switch (window.role) {

      case 'Sales':
        formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

        break;

      case 'Support':
        formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

        break;

      case 'Engineer':
        formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

        break;

      case 'TeamLead':
        formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

        break;

      case 'Manager':
        formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

        break;
    }
  }
  const create = (): void => {
    if (grid) {
      let column = (grid as GridComponent).getColumnByField('Salary');
      column.validationRules = {
        required: [customFn, 'Please enter valid salary'],
      }
    }
  }
  const actionBegin = (args: EditEventArgs) => {
    window.role = args.rowData as { Role: string }['Role'];
  }
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const roleParams: IEditCell = {
    params: {
      allowFiltering: true,
      dataSource: jobRole,
      fields: { value: 'role', text: 'role' },
      query: new Query(),
      change: valChange
    }
  };
  const salaryParams: IEditCell = {
    params: {
      allowFiltering: true,
      dataSource: salaryDetails,
      fields: { value: 'salary', text: 'salary' },
      query: new Query()
    }
  };
  return (<div>
    <GridComponent id='grid' ref={g => grid = g} dataSource={employeeDetails} editSettings={editOptions}
      toolbar={toolbarOptions} created={create} actionBegin={actionBegin}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='Role' headerText='Role' width='160' editType='dropdownedit' edit={roleParams} />
        <ColumnDirective field='Salary' headerText='Salary' width='160' editType='dropdownedit' edit={salaryParams} />
        <ColumnDirective field='Address' headerText='Address' width='160' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;