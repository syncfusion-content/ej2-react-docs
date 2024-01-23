import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, PdfExport, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, ExcelExport, ExcelExportCompleteArgs, Toolbar, PdfExportCompleteArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport', 'PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_excelexport') {
      // pass fourth parameter as true to get the blob data of exported grid
      (grid as GridComponent).excelExport(undefined, undefined, undefined, true);
    }
    if (args.item.id === 'Grid_pdfexport') {
      // pass fourth parameter as true to get the blob data of exported grid
      (grid as GridComponent).pdfExport(undefined, undefined, undefined, true);
    }
  }
  const excelExportComplete = (args: ExcelExportCompleteArgs) => {
    // This event will be triggered when excel exporting.
    args.promise.then((e: { blobData: Blob }) => {
      // In this `then` function, you can get blob data through the arguments after promise resolved.
      exportBlob(e.blobData);
    });
  }
  const pdfExportComplete = (args: PdfExportCompleteArgs) => {
    // This event will be triggered when pdf exporting.
    args.promise.then((e: { blobData: Blob }) => {
      // In this `then` function, you can get blob data through the arguments after promise resolved.
      exportBlob(e.blobData);
    });
  }

  const exportBlob = (blob: Blob) => {
    const a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    const url: string = window.URL.createObjectURL(blob); // Fix typo here
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url); // Fix typo here
    document.body.removeChild(a);
  }

  return (
    <div>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowExcelExport={true} allowPdfExport={true}
        toolbarClick={toolbarClick} excelExportComplete={excelExportComplete} pdfExportComplete={pdfExportComplete} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;