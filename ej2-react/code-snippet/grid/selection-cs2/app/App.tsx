import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let enableToggle: boolean = true;
  const selectionSettings: SelectionSettingsModel = { type: 'Multiple' };
  const dropdownData: { [key: string]: Object; }[] = [
    { text: 'Row', value: 'Row' },
    { text: 'Cell', value: 'Cell' },
    { text: 'Both', value: 'Both' }
  ];
  const valueChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).selectionSettings.mode = args.value;
  }
  const toggleColumnSelection = (args: ChangeEventArgs) => {
    (grid as GridComponent).selectionSettings.enableToggle = args.checked;
    (enableToggle as boolean) = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Choose cell selection mode:</label>
    <DropDownListComponent index={0} width={150} dataSource={dropdownData} change={valueChange}></DropDownListComponent><br />
    <label style={{ padding: "30px 17px 0 0" }}>Enable/Disable Toggle selection</label>
    <SwitchComponent change={toggleColumnSelection} checked={enableToggle}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} height={315} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' width='150' />
        <ColumnDirective field='ShipCity' width='100' />
        <ColumnDirective field='ShipName' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;