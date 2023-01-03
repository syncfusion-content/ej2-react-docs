import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const show = () => {
        if (grid) {
            /** show by HeaderText */
            grid.showColumns(['Customer ID', 'Freight']);
        }
    };
    const hide = () => {
        if (grid) {
            /** hide by HeaderText */
            grid.hideColumns(['Customer ID', 'Freight']);
        }
    };
    return (<div>
    <ButtonComponent cssClass='e-flat' onClick={show}>Show</ButtonComponent>
    <ButtonComponent cssClass='e-flat' onClick={hide}>Hide</ButtonComponent>
    <GridComponent dataSource={data} height={295} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right"/>
        <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right"/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
