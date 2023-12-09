import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
    return (<div>
        <GridComponent dataSource={data} allowFiltering={true} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' allowFiltering={false} />
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right" />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Filter]} />
        </GridComponent></div>)
};
export default App;