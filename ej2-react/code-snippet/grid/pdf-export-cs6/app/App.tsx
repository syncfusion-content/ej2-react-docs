

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, DetailRow, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Grid, GridModel, Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  
  const childGridOptions : GridModel = {
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
    if (grid && args.item.id === 'grid_pdfexport') {
      const exportProperties: PdfExportProperties = {
          hierarchyExportMode: "Expanded"
      };
      grid.pdfExport(exportProperties);
    }
  }
    return (
      <div>
        <GridComponent id='grid' dataSource={employeeData} toolbar={toolbar} allowPdfExport={true}
          toolbarClick={toolbarClick} ref={g => grid = g} childGrid={childGridOptions}>
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
            <ColumnDirective field='FirstName' headerText='First Name' width='150'/>
            <ColumnDirective field='City' headerText='City' width='150'/>
            <ColumnDirective field='Country' headerText='Country' width='150'/>
          </ColumnsDirective>
          <Inject services={[DetailRow, Toolbar, PdfExport]}/>
        </GridComponent>
      </div>
    );
}
export default App;


