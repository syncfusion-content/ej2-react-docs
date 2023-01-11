

import { ColumnDirective, ColumnModel, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const stackedCols1: ColumnModel[] = [
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 120, textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight ($)', width: 100, format: 'C1', textAlign: 'Right' }
    ];
    const stackedCols2: ColumnModel[] = [
        { field: 'ShipCity', headerText: 'Ship City', allowResizing: false, width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 120 }
    ];
    return <GridComponent dataSource={data} allowResizing={true} height={315} width='auto'>
        <Inject services={[Resize]} />
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
            <ColumnDirective columns={stackedCols1} headerText='Order Details' />
            <ColumnDirective columns={stackedCols2} headerText='Ship Details' />
        </ColumnsDirective>
    </GridComponent>
};
export default App;


