import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, showConfirmDialog: false, mode: 'Dialog' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true, number: true };
  const customerIDRules: object = { required: true, minLength: 3 };
  const freightIDRules: object = { required: true, min: 1, max: 1000 };
  return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' type="number" textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type="string" validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' editType="numericedit" format="C" textAlign="Right" validationRules={freightIDRules} />
      <ColumnDirective field='ShipCountry' editType='dropdownedit' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
}
export default App;