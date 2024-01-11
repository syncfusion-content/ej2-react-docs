import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let textBox: TextBoxComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      if ((textBox as TextBoxComponent).value) {
        const exportProperties: PdfExportProperties = {
          fileName: (textBox as TextBoxComponent).value + '.pdf'
        };
        grid.pdfExport(exportProperties);
      } else {
        const exportProperties: PdfExportProperties = {
          fileName: 'new.pdf'
        };
        grid.pdfExport(exportProperties);
      }

    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}>Enter file name: </label>
      <TextBoxComponent ref={t => textBox = t} placeholder="Enter file name" width="120"></TextBoxComponent>
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