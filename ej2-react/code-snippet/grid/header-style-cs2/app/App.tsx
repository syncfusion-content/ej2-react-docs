import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return (
        <div>
            <GridComponent dataSource={data} height={315}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='OrderID' width='100' customAttributes={{ class: 'customcss' }} />
                    <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' customAttributes={{ class: 'customcss' }} />
                    <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
                </ColumnsDirective>
            </GridComponent></div>)
}
export default App;