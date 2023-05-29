import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbar = ['PdfExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            grid.columns[1].visible = true;
            grid.columns[3].visible = false;
            grid.pdfExport();
        }
    };
    const pdfExportComplete = () => {
        if (grid) {
            grid.columns[1].visible = false;
            grid.columns[3].visible = true;
        }
    };
    return (<div>
      <GridComponent id='grid' dataSource={data} toolbar={toolbar} allowPdfExport={true} toolbarClick={toolbarClick} pdfExportComplete={pdfExportComplete} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
          <ColumnDirective field='CustomerID' visible={false} headerText='Customer ID' width='150'/>
          <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right'/>
          <ColumnDirective field='OrderDate' width='140' format='yMd' textAlign='Right'/>
          <ColumnDirective field='ShipCity' visible={false} headerText='Ship City' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]}/>
      </GridComponent>
    </div>);
}
export default App;
