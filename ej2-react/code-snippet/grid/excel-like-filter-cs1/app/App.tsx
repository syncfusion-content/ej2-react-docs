import { ColumnDirective, ColumnsDirective, Page, PageSettingsModel, Sort } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const FilterOptions: FilterSettingsModel = {
    type: 'Excel'
  };
  const pageOptions: PageSettingsModel = { pageSize: 6 }
  return <GridComponent dataSource={data} filterSettings={FilterOptions} allowFiltering={true} height={273} allowPaging={true} pageSettings={pageOptions} allowSorting={true}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" />
      <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' />
    </ColumnsDirective>
    <Inject services={[Filter, Page, Sort]} />
  </GridComponent>
};
export default App;