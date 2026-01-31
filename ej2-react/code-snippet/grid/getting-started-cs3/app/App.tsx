

import { ColumnDirective, ColumnsDirective, Filter, type FilterSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import {  Group, Inject, Page, type PageSettingsModel, Sort, type SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const pageSettings: PageSettingsModel = { pageSize: 6 }
    const sortSettings: SortSettingsModel = { columns: [
                            {field: 'EmployeeID', direction: 'Ascending' }
                        ] };
    const filterSettings: FilterSettingsModel = { columns: [
                            {field: 'EmployeeID', operator: 'greaterthan', value: 2 }
                        ] };
    return <GridComponent dataSource={data} allowPaging={true} pageSettings={ pageSettings }
            filterSettings = {filterSettings}
            allowSorting={true} sortSettings={ sortSettings } allowFiltering={true}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent>
};
export default App;


