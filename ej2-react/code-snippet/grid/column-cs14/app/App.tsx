

import { createElement } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const columnDrop = () => {
        const span: HTMLElement = createElement('span');
        span.innerHTML = 'columnDrop event is Triggered </br>';
        (document.getElementById('events') as HTMLElement).append(span);
    }
    const columnDragStart = () => {
        const span: HTMLElement = createElement('span');
        span.innerHTML = 'columnDragStart event is Triggered </br>';
        (document.getElementById('events') as HTMLElement).append(span);
    }
    const columnDrag = () => {
        const span: HTMLElement = createElement('span');
        span.innerHTML = 'columnDrag event is Triggered </br>';
        (document.getElementById('events') as HTMLElement).append(span);
    }
    const styles: object = {
        'borderStyle': 'outset',
        'fontSize': '14px',
        'height': '40px',
        'overflowY': 'scroll',
        'width': '240px'
    }
    return (<div>
        <div id='events' style={styles} />
        <GridComponent dataSource={data} allowReordering={true} height={275}
            columnDragStart={columnDragStart} columnDrag={columnDrag} columnDrop={columnDrop}>
            <Inject services={[Reorder]} />
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
                <ColumnDirective field='ShipRegion' headerText='Ship Region' width='100' textAlign="Right" />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' textAlign="Right" />
            </ColumnsDirective>
        </GridComponent></div>)
};
export default App;


