import { ColumnDirective, ColumnsDirective, FilterSettingsModel, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
    const pageSettings: PageSettingsModel = { pageSize: 5 };
    const filterSettings: FilterSettingsModel = { type: 'FilterBar' };
    return <GridComponent dataSource={data} allowFiltering={true} allowPaging={true} pageSettings={pageSettings} filterSettings={filterSettings} height={268}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='100' textAlign="Right" />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
        </ColumnsDirective>
        <Inject services={[Filter, Page]} />
    </GridComponent>
};
export default App;