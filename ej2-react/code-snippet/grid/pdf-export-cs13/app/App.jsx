import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let dropDown;
  const toolbar = ['PdfExport'];
  const ddlData = [
    { text: 'Letter', value: 'Letter' },
    { text: 'Note', value: 'Note' },
    { text: 'Legal', value: 'Legal' },
    { text: 'A0', value: 'A0' },
    { text: 'A1', value: 'A1' },
    { text: 'A2', value: 'A2' },
    { text: 'A3', value: 'A3' },
    { text: 'A4', value: 'A4' },
    { text: 'A5', value: 'A5' },
    { text: 'A6', value: 'A6' },
    { text: 'A7', value: 'A7' },
    { text: 'A8', value: 'A8' },
    { text: 'B0', value: 'B0' },
    { text: 'B1', value: 'B1' },
    { text: 'B2', value: 'B2' },
    { text: 'B3', value: 'B3' },
    { text: 'B4', value: 'B4' },
    { text: 'B5', value: 'B5' },
    { text: 'Archa', value: 'Archa' },
    { text: 'Archb', value: 'Archb' },
    { text: 'Archc', value: 'Archc' },
    { text: 'Archd', value: 'Archd' },
    { text: 'Arche', value: 'Arche' },
    { text: 'Flsa', value: 'Flsa' },
    { text: 'HalfLetter', value: 'HalfLetter' },
    { text: 'Letter11x17', value: 'Letter11x17' },
    { text: 'Ledger', value: 'Ledger' },
  ];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const exportProperties = {
        pageSize: dropDown.value
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change the page size property: </label>
      <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;