import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let grid;
  const change = ((args) => {
    const selectedRows = grid.getSelectedRows();
    for (const row of selectedRows) {
      row.style.backgroundColor = args.value;
    }
    grid.clearSelection();
  })
  const colorTemplate = (() => {
    return (
      <div id="colorPicker">
        <ColorPickerComponent id="color-picker" type="color" mode='Palette' change={change}></ColorPickerComponent>
      </div>
    )
  })
  return (
    <div>
      <GridComponent ref={g => grid = g} dataSource={employeeData} height={315} enableHover={false}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='100' />
          <ColumnDirective field='FirstName' headerText='FirstName' width='120' />
          <ColumnDirective field='City' headerText='City' width='120' />
          <ColumnDirective headerText='Change the color of row' width='120' textAlign='Center' template={colorTemplate} />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;