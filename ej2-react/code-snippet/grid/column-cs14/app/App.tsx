import { ColumnDirective, ColumnDragEventArgs, ColumnsDirective, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    let grid: GridComponent | null;
    const [message, setMessage] = useState('');
    const columnDrop = ((args: ColumnDragEventArgs) => {
        setMessage('columnDrop event triggered');
        if ((args as any).column.allowReordering === true) {
            (grid as any).getColumnByField((args as any).column.field).customAttributes = {
                class: 'customcss',
            };
        }
    })
    const columnDragStart = ((args: ColumnDragEventArgs) => {
        setMessage('columnDragStart event triggered');
        if ((args as any).column.field === 'OrderID') {
            (grid as any).getColumnByField((args as any).column.field).allowReordering = false;
        }
    })
    const columnDrag = ((args: ColumnDragEventArgs) => {
        var index = (args as any).target.getAttribute('data-colIndex');
        if (index) {
            setMessage('columnDrag event is triggered. ' + (args as any).column.headerText + ' column is dragged to index ' + index);
        }
    })
    return (
        <div>
            <p id='message'>{message}</p>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} allowReordering={true} enableHover={false} columnDrag={columnDrag} columnDragStart={columnDragStart} columnDrop={columnDrop}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='120' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
                </ColumnsDirective>
                <Inject services={[Reorder]} />
            </GridComponent></div>)
}
export default App;