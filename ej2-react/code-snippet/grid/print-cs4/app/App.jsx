import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, HierarchyGridPrintMode } from '@syncfusion/ej2-react-grids';
import { DetailRow, GridModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data, employeeData } from './datasource';

function App() {
  const dropdownData = ['All', 'Expanded', 'None'];
  const [hierarchyPrintMode, setHierarchyPrintMode] = useState('All');
  const onModeChange = (args) => {
    setHierarchyPrintMode(args.value);
  }
  const childGridOptions = {
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: data,
    queryString: 'EmployeeID'
  };
  const toolbaroptions = ['Print'];
  return (<div>
    <label style={{ padding: "10px 10px 26px 0" }}><b>Select Mode </b></label>
    <DropDownListComponent index={0} width={200} dataSource={dropdownData} change={onModeChange}></DropDownListComponent>
    <GridComponent toolbar={toolbaroptions} hierarchyPrintMode={hierarchyPrintMode} dataSource={employeeData}
      childGrid={childGridOptions}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
        <ColumnDirective field='FirstName' headerText='First Name' width='150' />
        <ColumnDirective field='City' headerText='City' width='150' />
        <ColumnDirective field='Country' headerText='Country' width='150' />
      </ColumnsDirective>
      <Inject services={[DetailRow, Toolbar]} />
    </GridComponent ></div>)
};
export default App;