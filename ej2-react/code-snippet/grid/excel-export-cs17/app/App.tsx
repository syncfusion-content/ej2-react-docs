import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems, ExcelHeaderQueryCellInfoEventArgs, ExcelExport, ExcelCell } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      grid.excelExport();
    }
  }
  const excelHeaderQueryCellInfo = (args: ExcelHeaderQueryCellInfoEventArgs) => {
    (args.gridCell as ExcelCell).value = '';
  }

  const created = () => {
    var processGridExportObject = (grid as GridComponent).excelExportModule.__proto__.processGridExport;
    (grid as GridComponent).excelExportModule.__proto__.processGridExport = function (gobj: object, props: ExcelExport, r: boolean) {
      var rows = processGridExportObject.call(this, gobj, props, r);
      rows.shift();
      rows.forEach((item: any, index: number) => {
        item.index = index + 1;
      });
      return rows;
    };
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} height={270} toolbar={toolbar} allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g} created={created} excelHeaderQueryCellInfo={excelHeaderQueryCellInfo}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;