import { ColumnDirective, ColumnsDirective, GridComponent, Inject, ExcelExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const orderColumns = [{
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
  
  const shipColumns = [
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
  let grid;
  const toolbar = ['ExcelExport'];

  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      grid.columns[1].columns[0].visible = false;
      grid.columns[2].columns[2].visible = true;
      grid.excelExport();
    }
  }

  const excelExportComplete = (args) => {
    if (grid) {
      grid.columns[1].columns[0].visible = true;
      grid.columns[2].columns[2].visible = false;
    }
  }
  
  return (
    <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowExcelExport={true} toolbarClick={toolbarClick} excelExportComplete={excelExportComplete} ref={g => grid = g} height={260}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective headerText='Order Details' columns={orderColumns} textAlign="Center" width='150' />
        <ColumnDirective headerText='Ship Details' columns={shipColumns} textAlign="Center" width='150' />
      </ColumnsDirective>
      <Inject services={[Toolbar, ExcelExport]} />
    </GridComponent>
  );

};
export default App;