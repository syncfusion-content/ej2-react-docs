import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { ExcelExport, ExcelExportProperties, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];

  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      const excelExportProperties: ExcelExportProperties = {
        dataSource: data
      };
      grid.excelExport(excelExportProperties);
    }
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} height={270} toolbar={toolbar}
        allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;