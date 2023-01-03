

import { ColumnDirective, ColumnMenu, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import './custom.css';
import { data } from './datasource';

function App() {
    return <div>
        <GridComponent dataSource={data} height={315} showColumnMenu={true}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' />
                <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
            </ColumnsDirective>
            <Inject services={[ColumnMenu]} />
        </GridComponent>
    </div>
};
export default App;


