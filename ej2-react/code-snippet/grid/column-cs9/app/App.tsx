

import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnMenu, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { ColumnMenuItemModel, Inject, Page, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const columnMenuItems: ColumnMenuItemModel[] = [{ text: 'Clear Sorting', id: 'gridclearsorting' }];
    const sortSettings: SortSettingsModel = { columns: [{ direction: "Ascending", field: "OrderID" }] };

    const columnMenuClick = (args: MenuEventArgs) => {
        if (grid && args.item.id === 'gridclearsorting') {
            grid.clearSorting();
        }
    }
    return (
        <div>
            <GridComponent dataSource={data} allowPaging={true} allowSorting={true} showColumnMenu={true} sortSettings={sortSettings}
                ref={g => grid = g} columnMenuItems={columnMenuItems} columnMenuClick={columnMenuClick}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer Name' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='200' />
                </ColumnsDirective>
                <Inject services={[Sort, ColumnMenu, Page]} />
            </GridComponent>
        </div>
    );
};
export default App;


