import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, GroupSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar, Group } from '@syncfusion/ej2-react-grids';
import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const groupOptions: GroupSettingsModel = { columns: ['ShipCity'] };
  const toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'grid_pdfexport') {
      const exportProperties: PdfExportProperties = {
        theme: {
          header: {
            font: new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold),
            fontColor: '#000080',
            bold: true,
            border: { color: '#5A5A5A', dashStyle: 'Solid' }
          },
          caption: {
            font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9),
            fontColor: '#0B6623',
            bold: true
          },
          record: {
            font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10),
            fontColor: '#B22222',
            bold: true
          }
        }
      };
      (grid as GridComponent).pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <GridComponent id='grid' dataSource={data} toolbar={toolbar} allowPdfExport={true} allowGrouping={true} groupSettings={groupOptions}
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