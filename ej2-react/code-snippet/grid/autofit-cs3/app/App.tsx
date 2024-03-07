import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { inventoryData } from './datasource';

function App() {
    let grid: GridComponent | null;
    const dataBound = (() => {
        grid.autoFitColumns(['Inventor', 'Number of INPADOC patents', 'Main fields of invention'], 1, 3);
    })
    return (
        <div>
            <GridComponent dataSource={inventoryData} height={315} ref={g => grid = g} allowResizing={true} dataBound={dataBound}>
                <ColumnsDirective>
                    <ColumnDirective field='Inventor' headerText='Inventor' width='120' clipMode= 'EllipsisWithTooltip' textAlign='Right' />
                    <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='150' />
                    <ColumnDirective field='Country' headerText='Country' width='130' />
                    <ColumnDirective field='Number of INPADOC patents' headerText='Number of INPADOC patents'width='150'/>
                    <ColumnDirective field='Active' headerText='Active' width='250' />
                    <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='120'/>
                </ColumnsDirective>
                <Inject services={[Resize]} />
            </GridComponent></div>
    )
}
export default App;
