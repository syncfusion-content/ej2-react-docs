import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let switchData;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const exportProperties = {
        allowHorizontalOverflow: switchData.value
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}>Enable or disable Horizontal Overflow property </label>
      <SwitchComponent ref={s => switchData = s}></SwitchComponent>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='130' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='90' />
          <ColumnDirective field='ShipPostalCode' headerText='Ship PostalCode' width='90' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;