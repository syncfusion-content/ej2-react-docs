

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Grid, Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'grid_pdfexport') {
      const exportProperties: PdfExportProperties = {
        pageSize: 'Letter'
      };
      grid.pdfExport(exportProperties);
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


