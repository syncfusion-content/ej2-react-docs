import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems, EditEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const roleIDRules: object = { required: true, minLength: 8 };
  const customerNameRules: object = { required: true }
  let isAddable: boolean = true;
  const actionBegin = (args: EditEventArgs) => {
    if (args.requestType === 'beginEdit' && args.rowData['Role'] === 'Admin') {
      args.cancel = true;
    }
    if (args.requestType === 'delete' && args.data[0]['Role'] === 'Admin') {
      args.cancel = true;
    }
    if (args.requestType === 'add') {
      if (!isAddable) {
        args.cancel = true;
      }
    }
  }
  const btnClick = (args) => {
    args.target.innerText === 'Grid is Addable' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
    isAddable = !isAddable;
  }
  return (<div>
    <ButtonComponent id='small' onClick={btnClick}>Grid is Addable</ButtonComponent>
    <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} actionBegin={actionBegin} height={240}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
        <ColumnDirective field='EmployeeName' headerText='Employee Name' width='120' validationRules={customerNameRules} />
        <ColumnDirective field='Role' headerText='Role' width='120' textAlign="Right" validationRules={roleIDRules} />
        <ColumnDirective field='EmployeeCountry' headerText='EmployeeCountry' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent>
  </div>)
};
export default App;