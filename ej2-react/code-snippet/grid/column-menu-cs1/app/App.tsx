import { ColumnDirective, ColumnMenu, ColumnsDirective, GridComponent, ColumnMenuClickEventArgs, FilterSettingsModel, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { Edit, Group } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const groupOptions: GroupSettingsModel = { showGroupedColumn: true };
    const filterSettings: FilterSettingsModel = { type: 'CheckBox' };
    const columnMenuItems: any = [
        'SortAscending',
        'SortDescending',
        'Group',
        'Ungroup',
        'Filter',
        {
            text: 'Sub Menu',
            items: [
                { text: 'Option 1', id: 'option1' },
                { text: 'Option 2', id: 'option2' },
                { text: 'Option 3', id: 'option3' },
                {
                    text: 'Nested Sub Menu',
                    items: [
                        { text: 'Nested Option 1', id: 'nestedoption1' },
                        { text: 'Nested Option 2', id: 'nestedoption2' },
                    ],
                },
            ],
        },
    ];
    const columnMenuClick = ((args: ColumnMenuClickEventArgs) => {
        if (args.item.id === 'option1') {
            // custom function
        }
    });
    return <div>
        <GridComponent dataSource={data} allowPaging={true} allowGrouping={true} allowSorting={true} showColumnMenu={true} columnMenuItems={columnMenuItems} contextMenuClick={columnMenuClick} allowFiltering={true} groupSettings={groupOptions} filterSettings={filterSettings}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey={true} />
                <ColumnDirective field='CustomerID' headerText='Customer Name' />
                <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='200' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
            </ColumnsDirective>
            <Inject services={[Sort, ColumnMenu, Filter, Page, Group, Edit]} />
        </GridComponent>
    </div>;
}
;
export default App;