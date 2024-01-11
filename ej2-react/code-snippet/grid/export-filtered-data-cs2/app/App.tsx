import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, PdfExportProperties } from '@syncfusion/ej2-react-grids';
import { Page, PdfExport, Toolbar, ToolbarItems, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const selectionOptions: SelectionSettingsModel = { type: 'Multiple', enableSimpleMultiRowSelection: true };
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') {
      const selectedRecords = grid.getSelectedRecords();
      const exportProperties: PdfExportProperties = {
        dataSource: selectedRecords
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (<GridComponent id='Grid' dataSource={data} allowPaging={true} allowPdfExport={true} toolbar={toolbar}
    selectionSettings={selectionOptions} toolbarClick={toolbarClick} ref={g => grid = g}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Page, Toolbar, PdfExport]} />
  </GridComponent>)
};
export default App;