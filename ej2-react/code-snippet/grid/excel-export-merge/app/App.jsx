import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    let gridcells= null;
    let currentOrderID=null;
    let rowspanCount= 1;
    const toolbarOptions = ['ExcelExport'];
    const toolbarClick = function(args) {
      if (args.item.id === 'Grid_excelexport') { 
          grid.excelExport();
      }
    };
    const excelQueryCellInfo = function(args) {
    
          if (!currentOrderID && args.column.field == "OrderID") {
              currentOrderID = args.data["OrderID"];
              gridcells = args.cell;
          }
          else if (currentOrderID && args.column.field == "OrderID" && currentOrderID == args.data["OrderID"]) {
            rowspanCount++;
          } else if (currentOrderID !== args.data["OrderID"] && args.column.field == "OrderID") {
              gridcells.rowSpan = rowspanCount;
              currentOrderID = args.data["OrderID"];
              gridcells = args.cell;
              rowspanCount = 1;
          }
      };
    const excelExportComplete=function(args) {
          currentOrderID = null;
          gridcells = null;
          rowspanCount=1;
        }
   
    return (<div>
      <GridComponent id='Grid' dataSource={data} height={270} allowExcelExport={true} 
      toolbarClick={toolbarClick} ref={g => grid = g} toolbar={toolbarOptions} enableRowSpan={true}
        gridLines = 'Both' excelQueryCellInfo={excelQueryCellInfo} excelExportComplete={excelExportComplete}>
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
