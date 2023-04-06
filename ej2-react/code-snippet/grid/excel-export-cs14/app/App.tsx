

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, GridModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { DetailRow, ExcelExport, ExcelExportProperties, Grid, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
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

  const beforeExcelExport = (args) => {
    args.isChild = true;
  };

  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      const exportProperties: ExcelExportProperties = {
        hierarchyExportMode: "Expanded"
      };
      grid.excelExport(exportProperties);
    }
  }
  return <GridComponent ref={g => grid = g} id='Grid' toolbar={['ExcelExport']}
    toolbarClick={toolbarClick} beforeExcelExport={beforeExcelExport} allowExcelExport={true}
    dataSource={employeeData} childGrid={childGridOptions}>
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
      <ColumnDirective field='FirstName' headerText='First Name' width='150' />
      <ColumnDirective field='City' headerText='City' width='150' />
      <ColumnDirective field='Country' headerText='Country' width='150' />
    </ColumnsDirective>
    <Inject services={[DetailRow, Toolbar, ExcelExport]} />
  </GridComponent >
};
export default App;


