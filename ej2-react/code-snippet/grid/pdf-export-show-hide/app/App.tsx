import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, PdfExport, Toolbar, ToolbarItems, Column, PdfExportCompleteArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const orderColumns : any = [{
    field: 'OrderDate',
    headerText: 'Order Date',
    format: 'yMd',
    width: 130,
    textAlign: 'Right',
    minWidth: 10,
  },
  {
    field: 'Freight',
    headerText: 'Freight ($)',
    width: 120,
    format: 'C1',
    textAlign: 'Right',
    minWidth: 10,
  }];
  
  const shipColumns : any = [
    {
      field: 'ShippedDate',
      headerText: 'Shipped Date',
      format: 'yMd',
      textAlign: 'Right',
      width: 150,
      minWidth: 10,
    },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 150,
      minWidth: 10,
    },
    {
      field: 'ShipName',
      headerText: 'Ship Name',
      width: 150,
      minWidth: 10,
      visible:false
    },
  ]
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];

  const toolbarClick = (args: ClickEventArgs): void => {
    if (grid && args.item.id === 'Grid_pdfexport') {
      (grid.columns[1] as Column).columns[0].visible = false;
      (grid.columns[2] as Column).columns[2].visible = true;
      grid.pdfExport();
    }
  }

  const pdfExportComplete = (args: PdfExportCompleteArgs): void => {
    if (grid) {
      (grid.columns[1] as Column).columns[0].visible = true;
      (grid.columns[2] as Column).columns[2].visible = false;
    }
  }

  return (
    <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true} toolbarClick={toolbarClick} pdfExportComplete={pdfExportComplete} ref={g => grid = g} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective headerText='Order Details' columns={orderColumns} textAlign="Center" width='150' />
        <ColumnDirective headerText='Ship Details' columns={shipColumns} textAlign="Center" width='150' />
      </ColumnsDirective>
      <Inject services={[Toolbar, PdfExport]} />
    </GridComponent>
  );
}
export default App;