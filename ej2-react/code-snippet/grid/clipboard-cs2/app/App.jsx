import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
function App() {
    let grid;
    const settings = { type: 'Multiple' };
    const copy = () => {
        if (grid) {
            grid.copy();
        }
    };
    const copyHeader = () => {
        if (grid) {
            grid.copy(true);
        }
    };
    return (<div>
    <ButtonComponent onClick={copy}>Copy</ButtonComponent>
    <ButtonComponent onClick={copyHeader}>CopyHeader</ButtonComponent>
    <GridComponent dataSource={employeeData} height={280} ref={g => grid = g} selectionSettings={settings}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
        <ColumnDirective field='FirstName' headerText='First Name' width='150'/>
        <ColumnDirective field='City' headerText='City' width='150'/>
        <ColumnDirective field='Country' headerText='Country' width='150'/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
export default App;
