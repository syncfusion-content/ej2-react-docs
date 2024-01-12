import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, ExcelExport, ExcelQueryCellInfoEventArgs, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Column, Inject, QueryCellInfoEventArgs, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const toolbar = ['ExcelExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') {
            grid.excelExport();
        }
    }
    const excelQueryCellInfo = (args) => {
        if (args.column.field === 'Freight') {
            const FreightData = args.data[args.column.field];
            if (FreightData < 30) {
                args.style = { backColor: '#99ffcc' };
            }
            else if (FreightData < 60) {
                args.style = { backColor: '#ffffb3' };
            }
            else {
                args.style = { backColor: '#ff704d' };
            }
        }
    }
    const queryCellInfo = (args) => {
        if (args.column.field === 'Freight') {
            const FreightData = args.data[args.column.field];
            if (FreightData < 30) {
                args.cell.style.backgroundColor = '#99ffcc';
            }
            else if (FreightData < 60) {
                args.cell.style.backgroundColor = '#ffffb3';
            }
            else {
                args.cell.style.backgroundColor = '#ff704d';
            }
        }
    }
    return (
        <div>
            <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowExcelExport={true}
                toolbarClick={toolbarClick} excelQueryCellInfo={excelQueryCellInfo}
                queryCellInfo={queryCellInfo} ref={g => grid = g} >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, ExcelExport]} />
            </GridComponent>
        </div>
    );
}
export default App;