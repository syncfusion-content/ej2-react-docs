import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, GroupSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar, Group } from '@syncfusion/ej2-react-grids';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';
import * as React from 'react';
import { data } from './datasource';
import { base64AlgeriaFont } from './font';

function App() {
  let grid;
  const toolbar = ['PdfExport'];
  const groupOptions = { columns: ['ShipCity'] };
  const toolbarClick = (args) => {
    if (args.item.id === 'Grid_pdfexport') {
      const exportProperties = {
        theme: {
          header: {
            font: new PdfTrueTypeFont(base64AlgeriaFont, 12),
            fontColor: '#000080',
            bold: true,
            border: { color: '#5A5A5A', dashStyle: 'Solid' }
          },
          caption: {
            font: new PdfTrueTypeFont(base64AlgeriaFont, 10),
            fontColor: '#0B6623',
            bold: true,
          },
          record: {
            font: new PdfTrueTypeFont(base64AlgeriaFont, 9),
            fontColor: '#B22222',
            bold: true,
          }
        }
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true} allowGrouping={true} groupSettings={groupOptions}
        toolbarClick={toolbarClick} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport, Group]} />
      </GridComponent>
    </div>
  );
}
export default App;