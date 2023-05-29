

import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Grid, GridComponent, Group, InfiniteScroll, LazyLoadGroup, GroupSettingsModel, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const groupOptions: GroupSettingsModel = {
    enableLazyLoading: true,
    columns: ['ProductName', 'CustomerName']
  };
  return (<div>
    <GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions}
      height={240} ref={g => grid = g} enableInfiniteScrolling={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" width='120' />
        <ColumnDirective field='ProductName' headerText='Product Name' width='160' />
        <ColumnDirective field='ProductID' headerText='Product ID' textAlign="Right" width='120' />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
        <ColumnDirective field='CustomerName' headerText='Customer Name' width='160' />
      </ColumnsDirective>
      <Inject services={[Group, LazyLoadGroup, InfiniteScroll]} />
    </GridComponent></div>)
};
export default App;


