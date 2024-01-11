import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Column, ColumnDirective, ColumnsDirective, ExcelExport, ExcelExportProperties, GridComponent, ToolbarItems, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

export interface ExcelExportColumn {
  field: string;
  headerText?: string;
  textAlign?: string;
  width: number;
}

function App() {
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') { //'Grid_excelexport' -> Grid component id + _ + toolbar item name
      const excelExportColumns: ExcelExportColumn[] = [
        { field: 'OrderID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer Name', width: 120 },
        { field: 'Freight', textAlign: 'Center', width: 120 },
      ];

      const excelExportProperties: ExcelExportProperties = {
        columns: excelExportColumns as Column[],
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