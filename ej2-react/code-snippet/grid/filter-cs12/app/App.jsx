import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const filterSettings = { enableCaseSensitivity: false };
  const onToggleCaseSensitive = (args) => {
    if (args.checked) {
      grid.filterSettings.enableCaseSensitivity = true;
    }
    else {
    grid.filterSettings.enableCaseSensitivity = false;
    }
  }
  return (<div>
    <label style={{marginTop:'20px'}}> Enable Case Sensitivity </label>
    <SwitchComponent change={onToggleCaseSensitive}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} filterSettings={filterSettings} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipRegion' headerText='Ship Region' width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent></div>)
};
export default App;