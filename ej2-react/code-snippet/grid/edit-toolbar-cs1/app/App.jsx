import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const selectOptions = { type: 'Multiple' };
  const toolbarOptions = ['Delete'];
  const orderIDRules = { required: true };
  const customerIDRules = { required: true, minLength: 3 };
  const freightIDRules = { required: true, min: 1, max: 1000 };
  return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265} selectionSettings={selectOptions}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' defaultValue='HANAR' validationRules={customerIDRules} headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" defaultValue='1' editType='numericedit' textAlign="Right" validationRules={freightIDRules} />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' defaultValue='France' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;