


import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, PdfExportProperties } from '@syncfusion/ej2-react-grids';
import { Filter, Grid, Page, PageSettingsModel, PdfExport, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { ExcelExport, ExcelExportProperties, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const pageOptions: PageSettingsModel = {pageSize:5, pageCount:5};
  const selectionOptions: SelectionSettingsModel = {type: 'Multiple'};
  const toolbar: ToolbarItems[] = ['PdfExport','ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid) {
      if (args.item.id === 'grid_pdfexport') {
        const selectedRecords = grid.getSelectedRecords();
        const exportProperties: PdfExportProperties = {
          dataSource: selectedRecords
        };
        grid.pdfExport(exportProperties);
      } else if (args.item.id === 'grid_excelexport') {
        const selectedRecords = grid.getSelectedRecords();
        const exportProperties: ExcelExportProperties = {
          dataSource: selectedRecords
        };
        grid.excelExport(exportProperties);
      }
    }
  }
    return (<GridComponent id='grid' dataSource={data} allowPaging={true}
    allowFiltering={true} allowPdfExport={true} allowExcelExport={true} toolbar={toolbar}
    pageSettings={pageOptions} selectionSettings={selectionOptions} toolbarClick={toolbarClick}
      ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
          <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Page, Filter,Toolbar, PdfExport, ExcelExport]} />
    </GridComponent>)
};
export default App;


