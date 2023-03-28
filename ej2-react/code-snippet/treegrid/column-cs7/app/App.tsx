

import { ColumnDirective, ColumnModel, ColumnsDirective,  Inject, Resize, TreeGridComponent  } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { orderData } from './datasource';

function App() {
    const colStack1: ColumnModel[] = [
        { field: 'orderID', headerText: 'Order ID', width: 90, textAlign: 'Right' },
        { field: 'orderName', headerText: 'Order Name', width: 170, textAlign: 'Left' }
    ];
    const colStack2: ColumnModel[] = [
        { field: 'Category', allowResizing: false, headerText: 'Shipment Category', width: 150, textAlign: 'Left' },
        { field: 'shippedDate', headerText: 'Shipped Date', width: 120, textAlign: 'Right', format:'yMd' }
    ];
    return <TreeGridComponent dataSource={orderData} treeColumnIndex={1} childMapping='subtasks' allowResizing={true} height='260'>
        <ColumnsDirective>
            <ColumnDirective columns={colStack1} headerText='Order Details' textAlign='Center'/>
            <ColumnDirective columns={colStack2} headerText='Shipment Details' textAlign='Center' />
        </ColumnsDirective>
        <Inject services={[Resize]}/>
    </TreeGridComponent>
};
export default App;


