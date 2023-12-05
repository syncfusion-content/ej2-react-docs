import { ColumnModel, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const dataBound = () => {
        if (grid) {
            const columns: ColumnModel[] = grid.columns as ColumnModel[];
            for (const col of columns) {
                if (col.field === "OrderID") {
                    col.width = 120;
                }
                if (col.field === "OrderDate") {
                    col.type = 'date';
                    col.format = 'yMd';
                }
                if (col.field === 'Freight') {
                    col.format = "P2";
                }
            }
            grid.refreshColumns();
        }
    }
    return <GridComponent dataSource={data} dataBound={dataBound} ref={g => grid = g} />
};
export default App;


