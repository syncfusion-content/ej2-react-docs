import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { PdfExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbarOptions= ['PdfExport'];
    let currentCell=null;
    let currentOrderID= null;
    let cellIndexCount=1;
      const toolbarClick= function(args) {
             if (args.item.id === 'Grid_pdfexport') { 
                grid.pdfExport();
            } 
          };
      const onDataBound=function() {
            let previousData= null;
            let startRowIndex = null;
            let endRowIndex= null;
            let rows = grid.getRows();
            let data =  grid.getCurrentViewRecords();
    
            for (let i = 0, len = rows.length; i < len; i++) {
                if (!previousData) {
                    previousData = data[i]['OrderID'];
                    startRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"));
                }
                else if (previousData === data[i]['OrderID']) {
                    rows[i].children[0].classList.add('e-hide');
                }
                else if (previousData && previousData !== data[i]['OrderID']) {
                    if (grid.getRows().length > 0 && grid.getRows().length > startRowIndex) {
                        endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                        let targetRow = grid.getRows()[startRowIndex];
                        let currentRowChild = rows[i] && rows[i].children[0];
                        if (targetRow && currentRowChild) {
                          let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                            parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(currentRowChild.getAttribute('aria-colindex'))
                          );
                          if (targetCell[0]) {
                            targetCell[0].setAttribute("rowSpan", endRowIndex - startRowIndex);
                          }
                        }
                        previousData = data[i]['OrderID'];
                        startRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                    }
                }
                if (rows[i].children[0].classList.contains("e-hide") || i < len) {
                    endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                    if (endRowIndex > 0) {
                      let targetRow = grid.getRows()[startRowIndex];  
                      let currentRowChild = rows[i] && rows[i].children[0];
                      if (targetRow && currentRowChild) {
                          let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                              parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(currentRowChild.getAttribute('aria-colindex'))
                          );
                          if (targetCell.length > 0) {
                              targetCell[0].setAttribute("rowSpan", endRowIndex - startRowIndex + 1);
                          }
                      }
                    }
                }
            }
            
          };
      const pdfQueryCellInfo=function(args) {
        if(!currentOrderID && args.column.field == "OrderID"){
                currentOrderID =  args.data["OrderID"];
                currentCell= args.cell;
            }
            else if(currentOrderID && args.column.field == "OrderID" &&  currentOrderID ==args.data["OrderID"]){
              cellIndexCount ++;
            } else if(currentOrderID !== args.data["OrderID"] && args.column.field == "OrderID") {
               currentCell.rowSpan = cellIndexCount;
              currentOrderID = args.data["OrderID"];
              currentCell=args.cell;
              cellIndexCount = 1 ;
            }
          };
           // Reset the pdf export global variable values
      const pdfExportComplete=function(args){
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
