import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let grid;
    const reorderByIndex = (() => {
        if (grid) {
            grid.reorderColumnByIndex(1, 3); //move column at index 1 to index 3
        }
    })
    return (
        <div>
            <ButtonComponent id='reorderByIndex' cssClass="e-info" onClick={reorderByIndex}>Reorder column by index</ButtonComponent>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} allowReordering={true} >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                </ColumnsDirective>
                <Inject services={[Reorder]} />
            </GridComponent></div>)
}
export default App;