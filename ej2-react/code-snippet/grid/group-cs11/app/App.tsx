

import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Data, Grid, Group, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { PagedData } from './extendData';

Data.prototype = PagedData.prototype;

function App() {
  let grid: Grid | null;
  const groupOptions: object = { columns: ['ShipCountry'] };
  const pageSettings: object = { pageSize: 5 };
  return <GridComponent ref={g => grid = g} allowGrouping={true}
    groupSettings={groupOptions} allowPaging={true} pageSettings={pageSettings}
    dataSource={data}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' width='100' />
      <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
      <ColumnDirective field='ShipCountry' width='100' />
    </ColumnsDirective>
    <Inject services={[Group, Page]} />
  </GridComponent>
};
export default App;


