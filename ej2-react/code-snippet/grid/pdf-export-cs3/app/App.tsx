

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Grid, Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { image } from './image';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'grid_pdfexport') {
      const pdfExportProperties: PdfExportProperties = {
        footer: {
          contents: [
              {
                format: 'Page {$current} of {$total}',
                pageNumberType: 'Arabic',
                position: { x: 0, y: 25 },
                style: {
                  fontSize: 15,
                  textBrushColor: '#ffff80'
                },
                type: 'PageNumber'
              }
          ],
          fromBottom: 160,
          height: 150
        },
        header: {
          contents: [
              {
                position: { x: 40, y: 10 },
                size: { height: 100, width: 250 },
                src: image,
                type: 'Image'
              }
          ],
          fromTop: 0,
          height: 130
        }
      };
      if (grid) {
        grid.pdfExport(pdfExportProperties);
      }
    }
  }
    return (
      <div>
        <GridComponent id='grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
          toolbarClick={toolbarClick} ref={g => grid = g}>
          <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
              <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
              <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right'/>
              <ColumnDirective field='OrderDate' width='140' format='yMd' textAlign='Right'/>
              <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
          </ColumnsDirective>
          <Inject services={[Toolbar, PdfExport]}/>
        </GridComponent>
      </div>
    );
}
export default App;


