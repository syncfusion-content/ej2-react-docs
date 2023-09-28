

import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { ChangeEventArgs, DropDownList } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Column, Filter, ForeignKey, Grid } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const filterOptions: any = { type: 'Excel' };
  return <GridComponent dataSource={data} height={280} allowFiltering={true} filterSettings={filterOptions} ref={g => grid = g}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='100' textAlign="Right" />
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;


