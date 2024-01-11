import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true };
  const freightRules = { required: true, number: true };
  const shipCountryrules = { required: true };
  return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" validationRules={freightRules} />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' validationRules={shipCountryrules} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>;
};
export default App;