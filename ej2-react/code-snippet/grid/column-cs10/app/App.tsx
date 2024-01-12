import { ColumnDirective, ColumnMenu, ColumnMenuOpenEventArgs, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Column, ColumnMenuItemModel, Filter, FilterSettingsModel, Inject, Page, Sort, Group } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const filterOptions: FilterSettingsModel = { type: 'Menu' };

    const columnMenuOpen = (args: ColumnMenuOpenEventArgs) => {
        for (const item of args.items) {
            if (item.text === 'Filter' && (args.column as Column).field === 'OrderID') {
                (item as ColumnMenuItemModel).hide = true;
            }
        }
    }
    return (
        <div>
            <GridComponent dataSource={data} allowPaging={true} allowGrouping={true} showColumnMenu={true}
                allowFiltering={true} allowSorting={true} filterSettings={filterOptions}
                columnMenuOpen={columnMenuOpen}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer Name'  />
                    <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='200' />
                </ColumnsDirective>
                <Inject services={[Sort, ColumnMenu, Page, Filter, Group]} />
            </GridComponent>
        </div>
    );
};
export default App;


