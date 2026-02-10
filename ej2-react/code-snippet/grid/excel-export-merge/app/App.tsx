import { ColumnDirective, ColumnsDirective, GridComponent,ExcelQueryCellInfoEventArgs,ExcelExportCompleteArgs } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid:GridComponent| null;
    let gridcells: HTMLElement | null = null;
    let currentOrderID:number | null = null;
    let rowspanCount= 1;
    const toolbarOptions = ['ExcelExport'];
    const toolbarClick = function(args:ClickEventArgs) {
      if (args.item.id === 'Grid_excelexport') { 
          (grid as GridComponent).excelExport();
      }
    };
    const excelQueryCellInfo = function(args:ExcelQueryCellInfoEventArgs) {
          if (!currentOrderID && args.column.field == "OrderID") {
              currentOrderID = (args.data as Order)["OrderID"];
              gridcells = (args.cell as HTMLElement) ;
          }
          else if (currentOrderID && args.column.field == "OrderID" && currentOrderID == (args.data as Order)["OrderID"]) {
            rowspanCount++;
          } else if (currentOrderID !== (args.data as Order)["OrderID"] && args.column.field == "OrderID") {
              (gridcells as HTMLTableCellElement).rowSpan = rowspanCount;
              currentOrderID = (args.data as Order)["OrderID"];
              gridcells = (args.cell as HTMLElement);
              rowspanCount = 1;
          }
      };
    const excelExportComplete=function(args:ExcelExportCompleteArgs) {
          currentOrderID = null;
          gridcells = null;
          rowspanCount=1;
        }
   
    return (<div>
      <GridComponent id='Grid' dataSource={data} height={270} allowExcelExport={true} 
      toolbarClick={toolbarClick} ref={g => grid = g} toolbar={toolbarOptions} enableRowSpan={true}
        gridLines = 'Both'  excelQueryCellInfo={excelQueryCellInfo} excelExportComplete={excelExportComplete}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
          <ColumnDirective field='City' headerText='City' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]}/>
      </GridComponent>
    </div>);
}
;
export default App;

interface Order {
  OrderID: number;
  CustomerID: string;
  City: string;
}