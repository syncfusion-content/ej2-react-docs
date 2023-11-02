import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Resize, Inject } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const [message, setMessage] = useState('');
    const resizeStart = ((args: any) => {
        setMessage('resizeStart event triggered');
        if (args.column.field === 'OrderID') {
            args.cancel = true;
        }
    })
    const resizeStop = ((args: any) => {
        setMessage('resizeStop event triggered');
        const headerCell = (grid as any).getColumnHeaderByField(args.column.field);
        headerCell.classList.add('customcss');
        const columnCells = (grid as any).getContentTable().querySelectorAll(`[data-colindex="${(args as any).column.index}"]`);
        for (let i = 0; i < columnCells.length; i++) {
            const cell = columnCells[i] as HTMLElement;
            cell.style.backgroundColor = 'rgb(43, 195, 226)';
        }

    })
    const resizing = ((args: any) => {
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