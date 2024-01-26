import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const actionBegin = () => {
        if (grid) {
            grid.query.addParams('dataSource', 'data');
        }
    }
    return (<GridComponent dataSource={data} allowFiltering={true} allowPaging={true} enablePersistence={true} height={230}
        actionBegin={actionBegin} ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
        </ColumnsDirective>
        <Inject services={[Filter, Page]} />
    </GridComponent>)
};
export default App;