import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return <GridComponent dataSource={data} width='auto'>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='auto' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='40%' format="yMd" textAlign="Right" />
        </ColumnsDirective>
    </GridComponent>
};
export default App;