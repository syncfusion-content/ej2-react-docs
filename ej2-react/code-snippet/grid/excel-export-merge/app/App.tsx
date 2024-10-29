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
    const onDataBound= function() {
        let previousData: number | null = null;
        let startRowIndex: number | null = null;
        let endRowIndex: number | null = null;
    
          let rows =  (grid as GridComponent).getRows();
          let data =  (grid as GridComponent).getCurrentViewRecords();
    
          for (let i = 0, len = rows.length; i < len; i++) {
              if (!previousData) {
                  previousData = (data[i] as Order)['OrderID'];
                  startRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string));
              }
              else if (previousData === (data[i] as Order)['OrderID']) {
                  rows[i].children[0].classList.add('e-hide');
              }
              else if (previousData && previousData !== (data[i] as Order)['OrderID']) {
                  if ((grid as GridComponent).getRows().length > 0 && (grid as GridComponent).getRows().length > (startRowIndex as number)) {
                      endRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string), 10);
                      let targetRow =  (grid as GridComponent).getRows()[(startRowIndex as number)];
                      let currentRowChild = rows[i] && rows[i].children[0];
                      if (targetRow && currentRowChild) {
                        let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                          parseInt(((cell as HTMLElement).getAttribute('aria-colindex') as string), 10) === parseInt(((currentRowChild as HTMLElement).getAttribute('aria-colindex') as string))
                        );
                        if (targetCell[0]) {
                          (targetCell[0] as HTMLElement).setAttribute("rowSpan",((endRowIndex as number) - (startRowIndex as number)).toString());
                        }
                      }
                      previousData = (data[i]as Order)['OrderID'];
                      startRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string), 10);
                  }
              }
              if (rows[i].children[0].classList.contains("e-hide") || i < len) {
                  endRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string), 10);
                  if (endRowIndex > 0) {
                    let targetRow = (grid as GridComponent).getRows()[(startRowIndex as number)];  
                    let currentRowChild = rows[i] && rows[i].children[0];
                    if (targetRow && currentRowChild) {
                        let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                            parseInt(((cell as HTMLElement).getAttribute('aria-colindex') as string), 10) === parseInt(((currentRowChild as HTMLElement).getAttribute('aria-colindex') as string))
                        );
                        if (targetCell.length > 0) {
                            (targetCell[0] as HTMLElement).setAttribute("rowSpan", ((endRowIndex as number) - (startRowIndex as number) +1).toString());
                        }
                    }
                  }
              }
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
      toolbarClick={toolbarClick} ref={g => grid = g} toolbar={toolbarOptions} dataBound={onDataBound} excelQueryCellInfo={excelQueryCellInfo} excelExportComplete={excelExportComplete}>
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