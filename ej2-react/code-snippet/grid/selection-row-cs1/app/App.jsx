import { ColumnDirective, ColumnsDirective, GridComponent, Page, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const selectionSettings = { mode: 'Row', type: 'Single' };
  return (<div>
    <GridComponent dataSource={data} selectionSettings={selectionSettings} allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='100' format='yMd'/>
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2'/>
        <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='100' format='yMd'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;