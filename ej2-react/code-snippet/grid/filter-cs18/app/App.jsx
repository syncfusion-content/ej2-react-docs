import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const filterParams = { params: { showSpinButton: false } };
  const FilterOptions = {
    type: 'Menu'
  };
  return <GridComponent dataSource={data} filterSettings={FilterOptions} allowFiltering={true} height={273} allowPaging={true}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' filter={filterParams} width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
    </ColumnsDirective>
    <Inject services={[Filter, Page]} />
  </GridComponent>
};
export default App;