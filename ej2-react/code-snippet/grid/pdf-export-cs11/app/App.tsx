

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Column, Grid, Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'grid_pdfexport') {
      (grid.columns[1] as Column).visible = true;
      (grid.columns[3] as Column).visible = false;
      grid.pdfExport();
    }
  }
  const pdfExportComplete = (): void => {
    if (grid) {
      (grid.columns[1] as Column).visible = false;
      (grid.columns[3] as Column).visible = true;
    }
  }
  return (
    <div>
      <GridComponent id='grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} pdfExportComplete={pdfExportComplete} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' visible={false} headerText='Customer ID' width='150' />
          <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right'/>
          <ColumnDirective field='OrderDate' width='140' format='yMd' textAlign='Right'/>
          <ColumnDirective field='ShipCity' visible={false} headerText='Ship City' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]}/>
      </GridComponent>
    </div>
  );
}
export default App;


