import { ColumnDirective, ColumnsDirective, ExcelExport, GridComponent, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const toolbar = ['ExcelExport'];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_excelexport') { //'Grid_excelexport' -> Grid component id + _ + toolbar item name
      const excelExportColumns = [
        { field: 'OrderID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer Name', width: 120 },
        { field: 'Freight', textAlign: 'Center', width: 120 },
      ];

      const excelExportProperties = {
        columns: excelExportColumns,
      };
      grid.excelExport(excelExportProperties);
    }
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowExcelExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;