import { ColumnDirective, ColumnsDirective, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page, Sort } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const pageSettings: PageSettingsModel = { pageSize: 6 };
  return <GridComponent dataSource={data} allowFiltering={true} allowPaging={true} pageSettings={pageSettings} allowSorting={true}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
      <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter, Page, Sort]} />
  </GridComponent>
}
export default App;