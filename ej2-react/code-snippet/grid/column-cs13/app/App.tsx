import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let grid: GridComponent | null;
    const reorderSingleColumnUsingFieldName = (() => {
        if (grid) {
            grid.reorderColumns("ShipCity", "OrderID");
        }
    })
    const reorderMultipleColumnsUsingFieldName = (() => {
        if (grid) {
            grid.reorderColumns(['ShipCity', 'ShipCountry', 'ShipName'], 'OrderID');
        }
    })
    return (
        <div>
            <ButtonComponent id='reordersingle' cssClass="e-info" onClick={reorderSingleColumnUsingFieldName}>Reorder single column</ButtonComponent>
            <ButtonComponent id='reordermultiple' cssClass="e-info" onClick={reorderMultipleColumnsUsingFieldName}>Reorder Multiple columns</ButtonComponent>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} allowReordering={true} >
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