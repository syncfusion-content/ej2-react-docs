import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (args.item.id === 'Grid_pdfexport') {
      grid.pdfExport();
    }
  }

  const queryCellInfo = (args) => {
    let data = args.data.OrderID;
    switch (data) {
      case 10248:
        if (args.column.field === 'CustomerID') {
          args.rowSpan = 2;
        }
        break;
      case 10250:
        if (args.column.field === 'CustomerID') {
          args.colSpan = 2;
        }
        break;
      case 10252:
        if (args.column.field === 'OrderID') {
          args.rowSpan = 3;
        }
        break;
      case 10256:
        if (args.column.field === 'CustomerID') {
          args.colSpan = 3;
        }
        break;
      case 10261:
        if (args.column.field === 'Freight') {
          args.colSpan = 2;
        }
        break;
    }
  }
  const pdfQueryCellInfo = (args) => {
    let data = args.data.OrderID;
    switch (data) {
      case 10248:
        if (args.column.field === 'CustomerID') {
          args.cell.rowSpan = 2;
        }
        break;
      case 10250:
        if (args.column.field === 'CustomerID') {
          args.colSpan = 2;
        }
        break;
      case 10252:
        if (args.column.field === 'OrderID') {
          args.cell.rowSpan = 3;
        }
        break;
      case 10256:
        if (args.column.field === 'CustomerID') {
          args.colSpan = 3;
        }
        break;
      case 10261:
        if (args.column.field === 'Freight') {
          args.colSpan = 2;
        }
        break;
    }
  };
  return (
    <div>
      <GridComponent id='Grid' gridLines='Both' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g} pdfQueryCellInfo={pdfQueryCellInfo} queryCellInfo={queryCellInfo}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='Freight' headerText='Freight' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;