

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const clickHandler = () => {
    if (grid) {
      grid.print();
    }
  }
    return (<div>
    <ButtonComponent onClick= { clickHandler }>Print</ButtonComponent>
    <GridComponent  dataSource={employeeData} height={280} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
        <ColumnDirective field='FirstName' headerText='First Name' width='150'/>
        <ColumnDirective field='City' headerText='City' width='150'/>
        <ColumnDirective field='Country' headerText='Country' width='150'/>
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;


