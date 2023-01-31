import { Query } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import { ExcelExport } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    let queryClone;
    const toolbar = ['PdfExport', 'ExcelExport'];
    const toolbarClick = (args) => {
        if (grid) {
            if (args.item.id === 'grid_pdfexport') {
                queryClone = grid.query;
                grid.query = new Query().addParams("recordcount", "12");
                grid.pdfExport();
            }
            else if (args.item.id === 'grid_excelexport') {
                queryClone = grid.query;
                grid.query = new Query().addParams("recordcount", "12");
                grid.pdfExport();
            }
        }
    };
    const pdfExportComplete = () => {
        if (grid) {
            grid.query = queryClone;
        }
    };
    const excelExportComplete = () => {
        if (grid) {
            grid.query = queryClone;
        }
    };
    return (<GridComponent id='grid' dataSource={data} allowPaging={true} pdfExportComplete={pdfExportComplete} excelExportComplete={excelExportComplete} allowFiltering={true} allowPdfExport={true} allowExcelExport={true} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right"/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, PdfExport, ExcelExport]}/>
  </GridComponent>);
}
;
export default App;
