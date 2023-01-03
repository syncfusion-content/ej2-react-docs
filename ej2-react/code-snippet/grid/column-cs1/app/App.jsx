import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const dataBound = () => {
        if (grid) {
            grid.autoFitColumns(['ShipName', 'ShipAddress']);
        }
    };
    return <GridComponent dataSource={data} height={315} dataBound={dataBound} ref={g => grid = g}>
        <Inject services={[Resize]}/>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='150'/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
            <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' format="yMd"/>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        </ColumnsDirective>
    </GridComponent>;
}
;
export default App;
