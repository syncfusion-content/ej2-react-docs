import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Column, Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_pdfexport') {
      grid.columns[1].visible = true;
      grid.columns[2].visible = false;
      grid.pdfExport();
    }
  }
  const pdfExportComplete = () => {
    if (grid) {
      grid.columns[1].visible = false;
      grid.columns[2].visible = true;
    }
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} pdfExportComplete={pdfExportComplete} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' visible={false} headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='130' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='120' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;