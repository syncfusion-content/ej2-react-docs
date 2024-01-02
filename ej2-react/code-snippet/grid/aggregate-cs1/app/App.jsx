import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Aggregate, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const aggregate = [{
    columns: [
      {
        type: ['Sum', 'Max', 'Min'],
        field: 'Freight',
        columnName: 'Freight',
        format: 'C2',
        footerTemplate: 'Sum: ${Sum}, Min:${Min}, Max:${Max}',
      },
    ],
  },]
  return (<GridComponent dataSource={data} allowPaging={true} height={315} aggregates={aggregate}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Page, Aggregate]} />
  </GridComponent>)
}
export default App;