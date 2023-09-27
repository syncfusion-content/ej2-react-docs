

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { ExcelExport, ExcelExportProperties, Grid, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
  let firstGrid: Grid | null;
  let secondGrid: Grid | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const gridsToExport: string[] = ['FirstGrid', 'SecondGrid'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (firstGrid &&
        args.item.id === 'FirstGrid_excelexport') {
      const appendExcelExportProperties: ExcelExportProperties = {
        multipleExport: { type: 'AppendToSheet', blankRows: 2 }
      };
      firstGrid.excelExport(appendExcelExportProperties, true);
    }
}
    return (
      <div>
      <p><b>First Grid:</b></p>
      <GridComponent id='FirstGrid' dataSource={data.slice(0, 5)} toolbar={toolbar} exportGrids={gridsToExport}
        allowExcelExport={true} toolbarClick={toolbarClick} ref={g => firstGrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]}/>
      </GridComponent>
      <p><b>Second Grid:</b></p>
      <GridComponent id='SecondGrid' dataSource={employeeData.slice(0, 5)}
        allowExcelExport={true} ref={g => secondGrid = g}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
          <ColumnDirective field='FirstName' headerText='First Name' width='120'/>
          <ColumnDirective field='LastName' headerText='Last Name' width='120'/>
          <ColumnDirective field='City' headerText='City' width='150'/>
        </ColumnsDirective>
        <Inject services={[ExcelExport]}/>
      </GridComponent>
  </div>
    );
}
export default App;


