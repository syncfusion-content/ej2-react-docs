import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  let grid;
  const dataBound = () => {
    grid.hideScroll();
  };
  return (<div>
    <GridComponent dataSource={data.slice(0, 2)} dataBound={dataBound} height='312' ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='OrderID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
        <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='120' textAlign='Right' />
        <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
        <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='150' />
        <ColumnDirective field='ShipName' headerText='ShipName' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
