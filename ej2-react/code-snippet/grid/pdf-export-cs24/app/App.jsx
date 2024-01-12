import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_pdfexport') {
      grid.pdfExport();
    }
  }
  const pdfHeaderQueryCellInfo = (args) => {
    args.cell.value = '';
    if (args.cell.value === '') {
      args.cell.height = '';
    }
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} height={270} toolbar={toolbar} allowPdfExport={true} toolbarClick={toolbarClick} ref={g => grid = g} pdfHeaderQueryCellInfo={pdfHeaderQueryCellInfo}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;