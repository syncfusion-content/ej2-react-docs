import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Inject, ExcelExport, Toolbar } from '@syncfusion/ej2-react-grids';
import { customerData, data } from './datasource';

function App() {
  const detail = [];
  let detailGrid;
  let masterGrid;
  const toolbarOptions = ['ExcelExport'];
  const gridsToexport = ['MasterGrid', 'DetailGrid'];
  const names = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
  const master = customerData.filter((e) => names.indexOf(e.CustomerID) !== -1);;
  const rowselect = (args) => {
    let selectedRecord = args.data;
    detailGrid.dataSource = data.filter((record) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
    document.getElementById('key').innerHTML = selectedRecord.ContactName;
  }
  const toolbarClick = (args) => {
    if (args.item.id === 'MasterGrid_excelexport') {
      const appendExcelExportProperties = {
        multipleExport: { type: 'AppendToSheet', blankRows: 2 }
      };
      masterGrid.excelExport(appendExcelExportProperties, true);
    }

  }

  return (
    <div >
      <p className="e-mastertext">Master Grid</p>
      <GridComponent id='MasterGrid' dataSource={master} selectedRowIndex={2} ref={grid => masterGrid = grid} allowExcelExport={true}
        toolbar={toolbarOptions} exportGrids={gridsToexport} rowSelected={rowselect} toolbarClick={toolbarClick}>
        <ColumnsDirective>
          <ColumnDirective field='ContactName' headerText='Customer Name' width='150' />
          <ColumnDirective field='CompanyName' headerText='Company Name' width='150' />
          <ColumnDirective field='Address' headerText='Address' width='150' />
          <ColumnDirective field='Country' headerText='Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Selection, ExcelExport, Toolbar]} />
      </GridComponent>

      <div className='e-statustext'> Showing orders of Customer:  <b id="key"></b></div>

      <GridComponent id='DetailGrid' dataSource={detail} allowExcelExport={true} allowSelection={false} ref={grid => detailGrid = grid}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='150' textAlign='Right' />
          <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign='Right' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' />
        </ColumnsDirective>
        <Inject services={[ExcelExport, Toolbar]} />
      </GridComponent>
    </div>
  )
}
export default App;