import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbar = ['PdfExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            grid.pdfExport();
        }
    };
    const pdfQueryCellInfo = (args) => {
        if (args.column.field === 'Freight') {
            if (getValue('data.Freight', args) < 30) {
                args.style = { backgroundColor: '#99ffcc' };
            }
            else if (getValue('data.Freight', args) < 60) {
                args.style = { backgroundColor: '#ffffb3' };
            }
            else {
                args.style = { backgroundColor: '#ff704d' };
            }
        }
    };
    const queryCellInfo = (args) => {
        if (args.column.field === 'Freight') {
            if (getValue('data.Freight', args) < 30) {
                args.cell.style.backgroundColor = '#99ffcc';
            }
            else if (getValue('data.Freight', args) < 60) {
                args.cell.style.backgroundColor = '#ffffb3';
            }
            else {
                args.cell.style.backgroundColor = '#ff704d';
            }
        }
    };
    return (<div>
      <GridComponent id='grid' dataSource={data} toolbar={toolbar} allowPdfExport={true} toolbarClick={toolbarClick} pdfQueryCellInfo={pdfQueryCellInfo} queryCellInfo={queryCellInfo} ref={g => grid = g}>
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
