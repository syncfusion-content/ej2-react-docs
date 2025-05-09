import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData, data } from './datasource';

function App() {
  let grid;
  const toolbar = ['PdfExport'];
  const childGrid = {
    dataSource: data,
    queryString: 'EmployeeID',
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120,},
      { field: 'ShipCity', headerText: 'Ship City', width: 120 },
      { field: 'OrderDate', headerText: 'Order Date', width: 120, type: 'date', format: { type: 'date', format: 'dd-MM-yyyy' }},
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
  };
  const toolbarClick = (args) => {
    if (args.item.id === 'Grid_pdfexport') {
      const exportProperties = {
        hierarchyExportMode: 'All'
      };
      grid.pdfExport(exportProperties);
    }
  };
  const exportDetailDataBound = (args) => {
    args.childGrid.columns[2].format = { type: 'date', format: 'dd\\/MM\\/yyyy'};
  };
  return (
    <div>
      <GridComponent ref={(g) => (grid = g)} id="Grid" dataSource={employeeData} height="220px" toolbar={toolbar} allowPdfExport={true} childGrid={childGrid} exportDetailDataBound={exportDetailDataBound} toolbarClick={toolbarClick}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' />
          <ColumnDirective field='FirstName' headerText='First Name' width='100' />
          <ColumnDirective field='LastName' headerText='Last Name' width='150' />
          <ColumnDirective field='City' headerText='City' width='120' />
        </ColumnsDirective>
        <Inject services={[DetailRow, Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;