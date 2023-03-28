

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const dataBound = () => {
      grid.hideScroll();
  }
  return (<div>
          <GridComponent dataSource={data.slice(0, 2)} dataBound={dataBound} height='312' ref={g => grid = g}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' width='120' textAlign='Right'/>
              <ColumnDirective field='CustomerID' width='150'/>
              <ColumnDirective field='EmployeeID' width='120' textAlign='Right'/>
              <ColumnDirective field='ShipCity' width='150'/>
              <ColumnDirective field='ShipCountry' width='150'/>
              <ColumnDirective field='ShipName' width='150'/>
            </ColumnsDirective>
          </GridComponent>
  </div>)
};
export default App;


