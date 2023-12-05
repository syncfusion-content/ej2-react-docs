import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let grid: Grid | null;
    const reorderSingleColumnByTargetIndex = (() => {
        if (grid) {
            grid.reorderColumnByTargetIndex("OrderID", 3); // move column with field name "OrderID" to index 3
        }
    })
    const reorderMultipleColumnByTargetIndex = (() => {
        if (grid) {
            grid.reorderColumnByTargetIndex(['OrderID', 'CustomerID'], 3); // move columns with field name "OrderID" and "CustomerID" to index 3
        }
    })
    return (
        <div>
            <ButtonComponent id='reordersingle' cssClass="e-info" onClick={reorderSingleColumnByTargetIndex}>Reorder single column</ButtonComponent>
            <ButtonComponent id='reordermultiple' cssClass="e-info" onClick={reorderMultipleColumnByTargetIndex}>Reorder Multiple columns</ButtonComponent>
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