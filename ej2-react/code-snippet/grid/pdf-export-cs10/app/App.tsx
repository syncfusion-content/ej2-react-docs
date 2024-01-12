import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, PdfExportProperties } from '@syncfusion/ej2-react-grids';
import { Page, PdfExport, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let switchData: SwitchComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') {
      const exportProperties: PdfExportProperties = {
        includeHiddenColumn: (switchData as SwitchComponent).checked
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (<div>
    <label style={{ padding: "10px 10px" }}>Enable or disable includeHiddenColumn property </label>
    <SwitchComponent ref={s => switchData = s}></SwitchComponent>
    <GridComponent id='Grid' dataSource={data} allowPaging={true} allowPdfExport={true} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='130' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='120' visible={false} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, PdfExport]} />
    </GridComponent></div>)
};
export default App;