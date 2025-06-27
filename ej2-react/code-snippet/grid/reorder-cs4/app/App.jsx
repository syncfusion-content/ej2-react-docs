import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let grid;
    const orderColumns = [
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 150 }
    ];
    const shipColumns = [
    { field: 'ShipName', headerText: 'Ship Name', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ];

    // Reorder a stacked header column before a normal column.
    const reorderColumnUsingColumnModel = (() => {
        if (grid) {
            grid.reorderColumnByModel(grid.columns[3], grid.columns[1]);
        }
    })

    // Reorder a child column within a stacked header column.
    const reorderChildColumnUsingColumnModel = (() => {
        if (grid) {
            const shipInfo = grid.columns[4];
            grid.reorderColumnByModel(shipInfo.columns[1], shipInfo.columns[0]);
        }
    })
    return (
        <div>
            <ButtonComponent id='reorderColumn' cssClass="e-info" onClick={reorderColumnUsingColumnModel}>Reorder Column</ButtonComponent>
            <ButtonComponent id='reorderChildColumn' cssClass="e-info" onClick={reorderChildColumnUsingColumnModel}>Reorder Stacked ChildColumn</ButtonComponent>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} allowReordering={true} >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C2' width='80' textAlign='Right' />
                    <ColumnDirective headerText='Order Details' textAlign='Center' columns={orderColumns} width='150' />
                    <ColumnDirective headerText='Ship Details' textAlign='Center' width='150' columns={shipColumns} />
                </ColumnsDirective>
                <Inject services={[Reorder]} />
            </GridComponent></div>)
}
export default App;