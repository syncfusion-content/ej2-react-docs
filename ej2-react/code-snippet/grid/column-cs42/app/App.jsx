import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return <GridComponent dataSource={data}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
            <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right' />
            <ColumnDirective field='OrderDate' width='140' format='yMd' textAlign='Right' />
        </ColumnsDirective>
    </GridComponent >
};
export default App;