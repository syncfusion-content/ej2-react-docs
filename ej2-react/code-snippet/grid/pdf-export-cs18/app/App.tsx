import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, Page, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { changedData, data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') {
      const exportProperties: PdfExportProperties = {
          dataSource: changedData
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPaging={true} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport, Page]}/>
      </GridComponent>
    </div>
  );
}
export default App;