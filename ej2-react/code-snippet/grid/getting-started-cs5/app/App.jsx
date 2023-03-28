import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const pageSettings = { pageSize: 6 };
    const sortSettings = { columns: [
            { field: 'EmployeeID', direction: 'Ascending' }
        ] };
    const filterSettings = { columns: [
            { field: 'EmployeeID', operator: 'greaterthan', value: 2 }
        ] };
    const groupSettings = { columns: ['EmployeeID'] };
    return <GridComponent dataSource={data} allowPaging={true} pageSettings={pageSettings} filterSettings={filterSettings} allowGrouping={true} groupSettings={groupSettings} allowSorting={true} sortSettings={sortSettings} allowFiltering={true} height={180}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]}/>
    </GridComponent>;
}
;
export default App;
