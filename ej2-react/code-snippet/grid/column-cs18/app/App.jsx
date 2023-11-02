import { ColumnDirective, ColumnsDirective, GridComponent, Resize, Inject } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const [message, setMessage] = useState('');
    const resizeStart = ((args) => {
        setMessage('resizeStart event triggered');
        if (args.column.field === 'OrderID') {
            args.cancel = true;
        }
    })
    const resizeStop = ((args) => {
        setMessage('resizeStop event triggered');
        const headerCell = grid.getColumnHeaderByField(args.column.field);
        headerCell.classList.add('customcss');
        const columnCells = grid.getContentTable().querySelectorAll(`[data-colindex="${args.column.index}"]`);
        for (let i = 0; i < columnCells.length; i++) {
            const cell = columnCells[i];
            cell.style.backgroundColor = 'rgb(43, 195, 226)';
        }

    })
    const resizing = (() => {
        setMessage('resizing event triggered');
    })
    return (
        <div>
            <div style={{ marginLeft: '180px' }}><p style={{ color: 'red' }}>{message}</p></div>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} allowResizing={true} enableHover={false} resizeStart={resizeStart} resizeStop={resizeStop} resizing={resizing}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                </ColumnsDirective>
                <Inject services={[Resize]} />
            </GridComponent></div>)
}
export default App;