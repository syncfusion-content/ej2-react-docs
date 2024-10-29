import { ColumnDirective, ColumnsDirective, GridComponent,PdfQueryCellInfoEventArgs,PdfExportCompleteArgs} from '@syncfusion/ej2-react-grids';
import { PdfExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import * as React from 'react';
import { data } from './datasource';
import { PdfGridCell } from '@syncfusion/ej2-pdf-export';
function App() {
    let grid:GridComponent|null;
    const toolbarOptions= ['PdfExport'];
    let currentCell:  PdfGridCell | null  = null;
    let currentOrderID:number | null = null;
    let cellIndexCount=1;
      const toolbarClick= function(args:ClickEventArgs) {
             if (args.item.id === 'Grid_pdfexport') { 
                (grid as GridComponent).pdfExport();
            } 
          };
      const onDataBound=function() {
        let previousData: number | null = null;
        let startRowIndex: number | null = null;
        let endRowIndex: number | null = null;
            let rows = (grid as GridComponent).getRows();
            let data =  (grid as GridComponent).getCurrentViewRecords();
    
            for (let i = 0, len = rows.length; i < len; i++) {
                if (!previousData) {
                    previousData = (data[i] as Order)['OrderID'];
                    startRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string));
                }
                else if (previousData ===(data[i] as Order)['OrderID']) {
                    rows[i].children[0].classList.add('e-hide');
                }
                else if (previousData && previousData !== (data[i] as Order)['OrderID']) {
                    if ((grid as GridComponent).getRows().length > 0 && (grid as GridComponent).getRows().length > (startRowIndex as number)) {
                        endRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string), 10);
                        let targetRow = (grid as GridComponent).getRows()[(startRowIndex as number)];
                        let currentRowChild = rows[i] && rows[i].children[0];
                        if (targetRow && currentRowChild) {
                          let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                            parseInt(((cell as HTMLElement).getAttribute('aria-colindex') as string), 10) === parseInt(((currentRowChild as HTMLElement).getAttribute('aria-colindex') as string))
                          );
                          if (targetCell[0]) {
                            (targetCell[0] as HTMLElement).setAttribute("rowSpan", ((endRowIndex as number) - (startRowIndex as number)).toString());
                          }
                        }
                        previousData = (data[i] as Order)['OrderID'];
                        startRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string), 10);
                    }
                }
                if (rows[i].children[0].classList.contains("e-hide") || i < len) {
                    endRowIndex = parseInt((rows[i].getAttribute("aria-rowindex") as string), 10);
                    if (endRowIndex > 0) {
                      let targetRow = (grid as GridComponent).getRows()[(startRowIndex as number)];  
                      let currentRowChild = rows[i] && rows[i].children[0];
                      if (targetRow && currentRowChild) {
                          let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                              parseInt(((cell as HTMLElement).getAttribute('aria-colindex') as string), 10) === parseInt(((currentRowChild as HTMLElement).getAttribute('aria-colindex') as string))
                          );
                          if (targetCell.length > 0) {
                              (targetCell[0] as HTMLElement).setAttribute("rowSpan", (endRowIndex - (startRowIndex as number)+ 1).toString());
                          }
                      }
                    }
                }
            }
            
          };
      const pdfQueryCellInfo=function(args:PdfQueryCellInfoEventArgs) {
        if(!currentOrderID && args.column && args.column.field == "OrderID"){
                currentOrderID =  (args.data as Order)["OrderID"];
                currentCell= args.cell as PdfGridCell;
            }
            else if(currentOrderID && args.column &&  args.column.field == "OrderID" &&  currentOrderID ==(args.data as Order)["OrderID"]){
              cellIndexCount ++;
            } else if(currentOrderID !== (args.data as Order)["OrderID"] &&args.column &&  args.column.field == "OrderID") {
               (currentCell  as PdfGridCell).rowSpan = cellIndexCount;
               currentOrderID = (args.data as Order)["OrderID"];
               currentCell=args.cell as PdfGridCell;
               cellIndexCount = 1 ;
            }
          };
           // Reset the pdf export global variable values
      const pdfExportComplete=function(args:PdfExportCompleteArgs){
            currentOrderID=null;
            currentCell=null;
            cellIndexCount =1;
      }
    return (<div>
      <GridComponent id='Grid' dataSource={data} height={270}  allowPdfExport={true} toolbarClick={toolbarClick} ref={g => grid = g}
        toolbar={toolbarOptions} dataBound={onDataBound} pdfQueryCellInfo={pdfQueryCellInfo} pdfExportComplete={pdfExportComplete}
        >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
          <ColumnDirective field='City' headerText='City' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]}/>
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