


import { ColumnDirective, ColumnsDirective, ForeignKey, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { orderDetails, employeeData, customerData } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const validationRules = { required: true };
  return <GridComponent dataSource={orderDetails} editSettings={editOptions} toolbar={toolbarOptions} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' isPrimaryKey={true} textAlign="Right" />
      <ColumnDirective field='CustomerID' foreignKeyValue='ContactName' foreignKeyField='CustomerID' dataSource={customerData} headerText='Customer Name' width='150' validationRules={validationRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' editType='numericedit' textAlign="Right" format='C2' />
      <ColumnDirective field='EmployeeID' foreignKeyValue='City' foreignKeyField='EmployeeID' dataSource={employeeData} headerText='Ship City' width='140' validationRules={validationRules} />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
    </ColumnsDirective>
    <Inject services={[ForeignKey, Edit, Toolbar]} />
  </GridComponent>
};
export default App;



