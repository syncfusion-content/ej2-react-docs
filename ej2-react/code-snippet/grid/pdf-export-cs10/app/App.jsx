import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let switchData;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'grid_pdfexport') {
      const exportProperties = {
        includeHiddenColumn: switchData.checked
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (<div>
    <label style={{ padding: "10px 10px" }}>Enable or disable includeHiddenColumn property </label>
    <SwitchComponent ref={s => switchData = s}></SwitchComponent>
    <GridComponent id='grid' dataSource={data} allowPaging={true} allowPdfExport={true} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
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