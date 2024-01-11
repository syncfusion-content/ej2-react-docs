import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true };
  const freightRules = { required: true, min: 1, max: 1000 };
  return <GridComponent dataSource={data} editSettings={editOptions} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" validationRules={freightRules} />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit]} />
  </GridComponent>
};
export default App;