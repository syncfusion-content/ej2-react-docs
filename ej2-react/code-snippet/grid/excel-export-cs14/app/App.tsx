import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, DetailRow, ExcelExport, ExcelExportProperties, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { GridModel, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropDown: DropDownListComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const ddlData: { [key: string]: Object; }[] = [
    { text: 'Expanded', value: 'Expanded' },
    { text: 'All', value: 'All' },
    { text: 'None', value: 'None' },
  ];
  const childGridOptions: GridModel = {
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: data,
    queryString: 'EmployeeID'
  };
  const toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_excelexport') {
      const exportProperties: ExcelExportProperties = {
        hierarchyExportMode: ((dropDown as DropDownListComponent).value as ExcelExportProperties["hierarchyExportMode"])
      };
      (grid as GridComponent).excelExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change the hierarchy export mode: </label>
      <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
      <GridComponent id='Grid' dataSource={employeeData} toolbar={toolbar} allowExcelExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g} childGrid={childGridOptions}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
          <ColumnDirective field='FirstName' headerText='First Name' width='150' />
          <ColumnDirective field='LastName' headerText='Last Name' width='150' />
          <ColumnDirective field='City' headerText='City' width='150' />
        </ColumnsDirective>
        <Inject services={[DetailRow, Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;