import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID', 'ShipCity'],
    showGroupedColumn: true
  };
  const onSwitchChange = (args: ChangeEventArgs) => {
    if (args.checked) {
      (grid as GridComponent).groupSettings.showGroupedColumn = false;
    }
    else {
      (grid as GridComponent).groupSettings.showGroupedColumn = true;
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <label style={{ marginRight: "5px" }}>Hide or show grouped columns</label>
        <SwitchComponent change={onSwitchChange}></SwitchComponent>
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={268}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;


