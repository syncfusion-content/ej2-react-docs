import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const dataBound = ((args: any) => {
        (grid as any).getColumnHeaderByIndex(0).style.color = '#0d0b0b';
        (grid as any).getColumnHeaderByField('CustomerID').style.background = '#f45ddeab';
        (grid as any).getColumnHeaderByField('CustomerID').style.color = '#0d0b0b';
        (grid as any).getColumnHeaderByUid('grid-column2').style.background = '#f45ddeab';
        const columnIndex = (grid as any).getColumnIndexByField('ShipCity');
        (grid as any).getColumnHeaderByIndex(columnIndex).style.color = '#0d0b0b';
        const index = (grid as any).getColumnIndexByUid('grid-column2');
        (grid as any).getColumnHeaderByIndex(index).style.color = '#0d0b0b';
    });
    return (
        <div>
            <GridComponent ref={g => grid = g} dataSource={data} height={315} dataBound={dataBound}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
                    <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                    <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
                </ColumnsDirective>
            </GridComponent></div>)
}
export default App;