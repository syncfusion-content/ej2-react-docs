import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbar = ['ExcelExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_excelexport') {
            grid.excelExport();
        }
    };
    const excelQueryCellInfo = (args) => {
        if (args.column.field === 'Freight') {
            if (getValue('data.Freight', args) < 30) {
                args.style = { backColor: '#99ffcc' };
            }
            else if (getValue('data.Freight', args) < 60) {
                args.style = { backColor: '#ffffb3' };
            }
            else {
                args.style = { backColor: '#ff704d' };
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
      <GridComponent id='grid' dataSource={data} height={270} toolbar={toolbar} allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g} excelQueryCellInfo={excelQueryCellInfo} queryCellInfo={queryCellInfo}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' visible={false} width='150'/>
          <ColumnDirective field='Freight' width='100' textAlign='Right'/>
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]}/>
      </GridComponent>
    </div>);
}
;
export default App;
