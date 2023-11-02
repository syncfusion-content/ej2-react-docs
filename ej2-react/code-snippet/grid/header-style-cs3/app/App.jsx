import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const dataBound = ((args) => {
        grid.getColumnHeaderByIndex(0).style.color = '#0d0b0b';
        grid.getColumnHeaderByField('CustomerID').style.background = '#f45ddeab';
        grid.getColumnHeaderByField('CustomerID').style.color = '#0d0b0b';
        grid.getColumnHeaderByUid('grid-column2').style.background = '#f45ddeab';
        const columnIndex = grid.getColumnIndexByField('ShipCity');
        grid.getColumnHeaderByIndex(columnIndex).style.color = '#0d0b0b';
        const index = grid.getColumnIndexByUid('grid-column2');
        grid.getColumnHeaderByIndex(index).style.color = '#0d0b0b';
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