import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return (
        <div>
            <GridComponent dataSource={data} height={315} >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                    <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' format='C' width='100' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width='140' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' visible={false} width='140' />
                </ColumnsDirective>
            </GridComponent>
        </div>
    )
}
export default App;