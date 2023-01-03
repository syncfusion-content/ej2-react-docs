import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const pageOptions = { pageSize: 6 };
    return (<GridComponent dataSource={data} printMode='CurrentPage' toolbar={['Print']} allowPaging={true} pageSettings={pageOptions}>
                <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
            </ColumnsDirective>
            <Inject services={[Toolbar, Page]}/>
        </GridComponent>);
}
;
export default App;
