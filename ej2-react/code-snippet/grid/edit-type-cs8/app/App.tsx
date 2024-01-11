import { ColumnDirective, ColumnsDirective, EditEventArgs, EditSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: Object = { required: true, number: true };
  const customerIDRules: Object = { required: true };
  const freightRules: Object = { required: true };
  const actionComplete = (args: EditEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      const tr = args.row as HTMLTableRowElement;
      const numericTextBox = tr.querySelector('.e-numerictextbox');
      if (numericTextBox) {
        const numericTextBoxInstance = (numericTextBox as HTMLFormElement)['ej2_instances'][0];
        numericTextBoxInstance.element.style.backgroundColor = 'light pink';
        numericTextBoxInstance.element.style.color = 'black';
        numericTextBoxInstance.element.style.border = '2px solid red';
        numericTextBoxInstance.element.style.textAlign = 'center';
        numericTextBoxInstance.max = 1000;
        numericTextBoxInstance.min = 1;
      }
      const dropDownList = tr.querySelector('.e-dropdownlist');
      if (dropDownList) {
        const dropDownListInstance = (dropDownList as HTMLFormElement)['ej2_instances'][0];
        dropDownListInstance.showPopup(); // Open the dropdown list
      }
    }
  }
  return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265} actionComplete={actionComplete}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' textAlign="Right" editType='numericedit' validationRules={freightRules} />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' editType='dropdownedit' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;