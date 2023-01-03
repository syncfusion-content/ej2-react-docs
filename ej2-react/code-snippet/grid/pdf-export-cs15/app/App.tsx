

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Grid, Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { adventProFont } from './font';

function App() {
  const toolbar: ToolbarItems[] = ['PdfExport'];
  let grid: Grid | null;
  const toolbarClick = (args: ClickEventArgs) => {
    const pdfExportProperties: PdfExportProperties = {
      theme: {
          caption: { font: new PdfTrueTypeFont(adventProFont, 10) },
          header: {font:  new PdfTrueTypeFont(adventProFont, 12) },
          record: { font: new PdfTrueTypeFont(adventProFont, 9) }
      }
    };
    if (grid) {
      grid.pdfExport(pdfExportProperties);
    }
  }
    return (
      <div>
          <GridComponent id='grid' dataSource={data.slice(0, 5)} toolbar={toolbar}
              allowPdfExport={true} toolbarClick={toolbarClick}
              ref={g => grid = g}>
              <ColumnsDirective>
                  <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
                  <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                  <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right'/>
                  <ColumnDirective field='OrderDate' width='140' format='yMd' textAlign='Right'/>
                  <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                  <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
              </ColumnsDirective>
              <Inject services={[Toolbar, PdfExport]}/>
          </GridComponent>
      </div>
    );
}
export default App;


