import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { image } from './image';

function App() {
  let grid;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (args.item.id === 'Grid_pdfexport') {
      const pdfExportProperties = {
        footer: {
          contents: [
            {
              format: 'Page {$current} of {$total}', //optional
              pageNumberType: 'Arabic',
              position: { x: 0, y: 25 },
              style: {
                fontSize: 15,
                textBrushColor: '#4169e1',
                hAlign: 'Center'
              },
              type: 'PageNumber'
            },
            {
              type: 'Line',
              style: { penColor: '#000080', penSize: 2, dashStyle: 'Dot' },
              points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            },
          ],
          fromBottom: 160,
          height: 150
        },
        header: {
          contents: [
            {
              type: 'Line',
              style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
              points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            },
            {
              type: 'Text',
              value: 'Exported Document Of Customers',
              position: { x: 200, y: 50 },
              style: { textBrushColor: '#000000', fontSize: 20 },
            },
            {
              type: 'Image',
              src: image,
              position: { x: 40, y: 10 },
              size: { height: 100, width: 150 },
            },
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
      <GridComponent id='Grid' dataSource={data} allowPaging={true} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport, Page]} />
      </GridComponent>
    </div>
  );
}
export default App;