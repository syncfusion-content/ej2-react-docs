import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { lazyLoadData } from './datasource';

function App() {
  let grid;
  const load = () => {
    setTimeout(() => {
      grid.showSpinner();
    }, 200)
    setTimeout(() => {
      grid.dataSource = lazyLoadData;
    }, 5000)
  }
  return (<div>
    <GridComponent ref={g => grid = g} height={315} load={load}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='OrderID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
        <ColumnDirective field='Quantity' headerText='Quantity' width='150' />
        <ColumnDirective field='CustomerAddress' headerText='CustomerAddress' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;