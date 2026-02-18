import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let grid: Grid | null;
    const refreshHeader = ((args: any) => {
        const column = (grid as any).getColumnByIndex(1);
        column.headerText = 'New Header Text'; // update the header text of the column object
        (grid as any).refreshHeader(); // refresh the grid header
    });

    return (
        <div>
            <ButtonComponent onClick={refreshHeader}>Refresh Header</ButtonComponent>
            <div style={{ padding: '20px 0 0 0' }}>
                <GridComponent ref={g => grid = g} dataSource={data} height={300} >
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;