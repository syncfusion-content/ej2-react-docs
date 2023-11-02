

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return <GridComponent dataSource={data}>
        <ColumnsDirective>
            <ColumnDirective type='checkbox' width='90' />
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" type='number' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' type='string' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" type='number' />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format="yMd" textAlign="Right" type='date' />
            <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='100' format="dd/MM/yyyy hh:mm" textAlign="Right" type='dateTime' />
            <ColumnDirective field='Verified' headerText='Verified' width='100' type='boolean' displayAsCheckBox={true} />
        </ColumnsDirective>
    </GridComponent>
};
export default App;