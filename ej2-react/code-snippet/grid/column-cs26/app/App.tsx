import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const show = () => {
    if (grid) {
      grid.showColumns('Customer ID', 'headerText'); //show by HeaderText
    }
  }
  const hide = () => {
    if (grid) {
      grid.hideColumns('Customer ID', 'headerText'); //hide by HeaderText
    }
  }
  return (<div>
    <ButtonComponent cssClass='e-info' onClick={show}>Show</ButtonComponent>
    <ButtonComponent style={{marginLeft:'20px'}} cssClass='e-info' onClick={hide}>Hide</ButtonComponent>
    <GridComponent dataSource={data} height={295} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
