

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, ExcelExport, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Grid, Page, PageSettingsModel, PdfExport, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const pageOptions: PageSettingsModel = {pageSize:5, pageCount:5};
  const toolbar: ToolbarItems[] = ['PdfExport','ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid) {
      if (args.item.id === 'grid_pdfexport') {
        grid.showSpinner();
        grid.pdfExport();
      }
      else if (args.item.id === 'grid_excelexport') {
          grid.showSpinner();
          grid.excelExport();
      }
    }
  }
  const pdfExportComplete = (): void => {
    if (grid) {
      grid.hideSpinner();
    }
  }
  const excelExportComplete = (): void => {
    if (grid) {
      grid.hideSpinner();
    }
  }
    return (<GridComponent id='grid' dataSource={data} allowPaging={true} allowPdfExport={true}
    pdfExportComplete={pdfExportComplete} excelExportComplete={excelExportComplete}
    allowExcelExport={true} toolbar={toolbar} pageSettings={pageOptions} toolbarClick={toolbarClick}
      ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
          <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, ExcelExport, PdfExport]} />
    </GridComponent>)
};
export default App;


