

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const add = () => {
        if (grid) {
            const rec: object = { OrderID: 10247, CustomerID: "ASDFG", ShipCity: 'Vins et alcools Chevalier', ShipName: 'Reims' };
            /** Add record */
            (grid.dataSource as object[]).unshift(rec);
            /** Refresh the Grid */
            grid.refresh();
        }
    }
    const deleteFunction = () => {
        if (grid) {
            const selectedRow: number = grid.getSelectedRowIndexes()[0];
            if (grid.getSelectedRowIndexes().length) {
                /** Delete record */
                (grid.dataSource as object[]).splice(selectedRow, 1);
            }
            else {
                alert("No records selected for delete operation");
            }
            /** Refresh the Grid */
            grid.refresh();
        }
    }
    return <div>
        <ButtonComponent cssClass='e-flat' onClick={add}>Add</ButtonComponent>
        <ButtonComponent cssClass='e-flat' onClick={deleteFunction}>Delete</ButtonComponent>
        <GridComponent dataSource={data} height={280} ref={g => grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
            </ColumnsDirective>
        </GridComponent>
    </div>
};
export default App;


