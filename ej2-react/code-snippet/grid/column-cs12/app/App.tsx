

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const reorder = () => {
        if (grid) {
            grid.reorderColumns('ShipCity', 'ShipName');
        }
    }
    return (<div>
        <ButtonComponent id='reorderSingleCols' onClick={reorder}>Reorder Ship City to Last</ButtonComponent>
        <GridComponent dataSource={data} allowReordering={true} height={275} ref={g => grid = g}>
            <Inject services={[Reorder]} />
            <ColumnsDirective>
                <ColumnDirective field='OrderID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' width='100' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
                <ColumnDirective field='ShipRegion' headerText='Ship Region' width='100' textAlign="Right" />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' textAlign="Right" />
            </ColumnsDirective>
        </GridComponent></div>)
};
export default App;


