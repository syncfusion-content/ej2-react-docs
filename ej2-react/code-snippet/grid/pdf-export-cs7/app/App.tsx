

import { getValue } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Column, Grid, Inject, PdfExport, PdfQueryCellInfoEventArgs, QueryCellInfoEventArgs, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'grid_pdfexport') {
        grid.pdfExport();
    }
  }
  const pdfQueryCellInfo = (args: PdfQueryCellInfoEventArgs): void => {
    if((args.column as Column).field === 'Freight'){
        if(getValue('data.Freight', args) < 30) {
            args.style = {backgroundColor: '#99ffcc'};
        }
        else if(getValue('data.Freight', args) < 60) {
            args.style = {backgroundColor: '#ffffb3'};
        }
        else {
            args.style = {backgroundColor: '#ff704d'};
        }
    }
  }
  const queryCellInfo = (args: QueryCellInfoEventArgs): void => {
    if((args.column as Column).field === 'Freight'){
        if(getValue('data.Freight', args) < 30) {
            (args.cell as HTMLElement).style.backgroundColor = '#99ffcc';
        }
        else if(getValue('data.Freight', args) < 60) {
          (args.cell as HTMLElement).style.backgroundColor = '#ffffb3';
        }
        else {
          (args.cell as HTMLElement).style.backgroundColor = '#ff704d';
        }
    }
  }
  return (
    <div>
      <GridComponent id='grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} pdfQueryCellInfo={pdfQueryCellInfo}
        queryCellInfo={queryCellInfo} ref={g => grid = g} >
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


