import { ColumnDirective, ColumnMenu, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const columnMenuItems = [{ text: 'Clear Sorting', id: 'gridclearsorting' }];
    const sortSettings = { columns: [{ direction: "Ascending", field: "OrderID" }] };
    const columnMenuClick = (args) => {
        if (grid && args.item.id === 'gridclearsorting') {
            grid.clearSorting();
        }
    };
    return (<div>
            <GridComponent dataSource={data} allowPaging={true} allowSorting={true} showColumnMenu={true} sortSettings={sortSettings} ref={g => grid = g} columnMenuItems={columnMenuItems} columnMenuClick={columnMenuClick}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right'/>
                    <ColumnDirective field='CustomerID' headerText='Customer Name'/>
                    <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right'/>
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='200'/>
                </ColumnsDirective>
                <Inject services={[Sort, ColumnMenu, Page]}/>
            </GridComponent>
        </div>);
}
;
export default App;
