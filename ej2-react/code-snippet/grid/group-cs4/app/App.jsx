import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const groupOptions = {
    columns: ['CustomerID', 'ShipCity'],
    showDropArea: false
  };
  const onSwitchChange = (args) => {
    if (args.checked) {
      grid.groupSettings.showDropArea = true;
    }
    else {
      grid.groupSettings.showDropArea = false;
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <label style={{ marginRight: "5px" }}>Hide or show drop area</label>
        <SwitchComponent change={onSwitchChange}></SwitchComponent>
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
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