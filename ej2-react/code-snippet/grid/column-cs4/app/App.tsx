

import { ColumnModel, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';


const data: object = [
  { OrderID: 10248, CustomerID: 'VINET', Freight: 32.3800, OrderDate: "1996-07-02T00:00:00.000Z" },
  { OrderID: 10249, CustomerID: 'TOMSP', Freight: 32.3800, OrderDate: "1996-07-19T00:00:00.000Z" },
  { OrderID: 10250, CustomerID: 'HANAR', Freight: 32.3800, OrderDate: "1996-07-22T00:00:00.000Z" }];

function App() {
    let isInitial = false;
    let grid: Grid | null;
    const load = () => {
        isInitial = true;
    }
    const dataBound = () => {
        if (grid && isInitial) {
            isInitial = false;
            const columns: ColumnModel[] = grid.columns as ColumnModel[];
            columns[0].width = 120;
            for (const col of columns) {
                if (col.field === "OrderDate") {
                    col.type = "date";
                }
                if (col.type === "date") {
                    col.format = { type: "date", format: "dd/MM/yyyy" };
                }
                if (col.field === 'Freight') {
                    col.format = "P2";
                }
            }
            grid.refreshColumns();
        }
    }
    return <GridComponent dataSource={data} dataBound={dataBound} load={load} ref={g => grid = g} />
};
export default App;


