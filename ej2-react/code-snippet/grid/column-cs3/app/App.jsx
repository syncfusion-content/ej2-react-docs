import { Edit, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
const data = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }
];
function App() {
    let grid;
    const editOptions = {
        allowAdding: true, allowDeleting: true, allowEditing: true
    };
    const dataBound = () => {
        if (grid) {
            const column = grid.columns[0];
            column.isPrimaryKey = true;
        }
    };
    return <GridComponent dataSource={data} dataBound={dataBound} ref={g => grid = g} editSettings={editOptions}>
        <Inject services={[Edit]}/>
    </GridComponent>;
}
;
export default App;
