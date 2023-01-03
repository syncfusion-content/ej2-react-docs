import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Filter, Page, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import { ExcelExport } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const pageOptions = { pageSize: 5, pageCount: 5 };
    const selectionOptions = { type: 'Multiple' };
    const toolbar = ['PdfExport', 'ExcelExport'];
    const toolbarClick = (args) => {
        if (grid) {
            if (args.item.id === 'grid_pdfexport') {
                const selectedRecords = grid.getSelectedRecords();
                const exportProperties = {
                    dataSource: selectedRecords
                };
                grid.pdfExport(exportProperties);
            }
            else if (args.item.id === 'grid_excelexport') {
                const selectedRecords = grid.getSelectedRecords();
                const exportProperties = {
                    dataSource: selectedRecords
                };
                grid.excelExport(exportProperties);
            }
        }
    };
    return (<GridComponent id='grid' dataSource={data} allowPaging={true} allowFiltering={true} allowPdfExport={true} allowExcelExport={true} toolbar={toolbar} pageSettings={pageOptions} selectionSettings={selectionOptions} toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
          <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Page, Filter, Toolbar, PdfExport, ExcelExport]}/>
    </GridComponent>);
}
;
export default App;
