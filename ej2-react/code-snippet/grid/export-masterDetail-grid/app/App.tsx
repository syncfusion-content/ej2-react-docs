import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, RowSelectEventArgs, Selection, Inject, ExcelExport, Toolbar, ExcelExportProperties, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { customerData, data } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-react-navigations';

type carType = { CustomerID: string, CustomerName: string, ContactName: string };

function App() {
  const detail: Object = [];
  let detailGrid: GridComponent | null;
  let masterGrid: GridComponent | null;
  const toolbarOptions: ToolbarItems[] = ['ExcelExport'];
  const gridsToexport = ['MasterGrid', 'DetailGrid'];
  const names: string[] = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
  const master: Object = customerData.filter((e: any) => names.indexOf(e.CustomerID) !== -1);;
  const rowselect = (args: RowSelectEventArgs) => {
    let selectedRecord: carType = args.data as carType;
    (detailGrid as GridComponent).dataSource = data.filter((record: any) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
    (document.getElementById('key') as HTMLElement).innerHTML = selectedRecord.ContactName;
  }
  const toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'MasterGrid_excelexport') {
      const appendExcelExportProperties: ExcelExportProperties = {
        multipleExport: { type: 'AppendToSheet', blankRows: 2 }
      };
      (masterGrid as GridComponent).excelExport(appendExcelExportProperties, true);
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
          <ColumnDirective field='ShipAddress' headerText='ShipAddress' width='150' />
        </ColumnsDirective>
        <Inject services={[ExcelExport, Toolbar]} />
      </GridComponent>
    </div>
  )
}
export default App;