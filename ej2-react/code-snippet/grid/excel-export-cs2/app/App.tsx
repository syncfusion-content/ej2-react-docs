import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, ExcelExport, ExcelQueryCellInfoEventArgs, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Column, Inject, QueryCellInfoEventArgs, Toolbar } from '@syncfusion/ej2-react-grids';
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
  const excelQueryCellInfo = (args: ExcelQueryCellInfoEventArgs): void => {
    if ((args.column as Column).field === 'Freight') {
      const FreightData = args.data[(args.column as Column).field];
      if (FreightData < 30) {
        args.style = { backColor: '#99ffcc' };
      }
      else if (FreightData < 60) {
        args.style = { backColor: '#ffffb3' };
      }
      else {
        args.style = { backColor: '#ff704d' };
      }
    }
  }
  const queryCellInfo = (args: QueryCellInfoEventArgs): void => {
    if ((args.column as Column).field === 'Freight') {
      const FreightData = args.data[(args.column as Column).field];
      if (FreightData < 30) {
        (args.cell as HTMLElement).style.backgroundColor = '#99ffcc';
      }
      else if (FreightData < 60) {
        (args.cell as HTMLElement).style.backgroundColor = '#ffffb3';
      }
      else {
        (args.cell as HTMLElement).style.backgroundColor = '#ff704d';
      }
    }
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowExcelExport={true}
        toolbarClick={toolbarClick} excelQueryCellInfo={excelQueryCellInfo}
        queryCellInfo={queryCellInfo} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;