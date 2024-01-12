import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, PdfExport, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
      if (args.item.id === 'Grid_pdfexport') {
        (grid as GridComponent).showSpinner();
        (grid as GridComponent).pdfExport();
    }
  }
  const pdfExportComplete = () => {
      (grid as GridComponent).hideSpinner();
  }
  return (<GridComponent id='Grid' dataSource={data} allowPdfExport={true} pdfExportComplete={pdfExportComplete} toolbar={toolbar} toolbarClick={toolbarClick}
    ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
        <ColumnDirective field='ProductName' headerText='ProductName' width='120' />
        <ColumnDirective field='Quantity' headerText='Quantity' width='150'/>
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, PdfExport]} />
  </GridComponent>)
};
export default App;