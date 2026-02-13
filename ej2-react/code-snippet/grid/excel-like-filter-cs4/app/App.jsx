import { ColumnDirective, ColumnsDirective, Page } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const filterOptions = {
    type: 'Excel'
  };
  const pageSettings = { pageSize: 6 };
  const ColumnfilterOptions = { hideSearchbox: true };
  return <GridComponent dataSource={data} filterSettings={filterOptions} allowFiltering={true} height={273} allowPaging={true} pageSettings={pageSettings}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' filter={ColumnfilterOptions} headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' filter={ColumnfilterOptions} headerText='Customer ID' width='100' />
      <ColumnDirective field='Freight' headerText='Freight' width='100' format='C2' />
      <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' />
    </ColumnsDirective>
    <Inject services={[Filter, Page]} />
  </GridComponent>
};
export default App;