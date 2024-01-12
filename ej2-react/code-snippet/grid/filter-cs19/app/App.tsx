

import { ColumnDirective, ColumnsDirective, Page } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const filterParams: object = { params: { autofill: false } };
  const FilterOptions: FilterSettingsModel = {
    type: 'Menu'
  };
  return <GridComponent dataSource={data} filterSettings={FilterOptions} allowFiltering={true} height={273} allowPaging={true}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' filter={filterParams} />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
    </ColumnsDirective>
    <Inject services={[Filter, Page]} />
  </GridComponent>
};
export default App;


