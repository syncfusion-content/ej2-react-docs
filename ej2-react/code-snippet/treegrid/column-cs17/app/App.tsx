

import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { orderData } from './datasource';

function App() {
    const totalPrice = (field: string, data: { units: number, unitPrice: number }, column: object): number => {
        return data.units * data.unitPrice;
    };

    return <TreeGridComponent dataSource={orderData} treeColumnIndex={1} childMapping='subtasks' height='315'>
        <ColumnsDirective>
            <ColumnDirective field='orderID' headerText='Order ID' width='110' textAlign='Right'/>
            <ColumnDirective field='orderName' headerText='Order Name' width='210' textAlign='Left'/>
            <ColumnDirective field='units' headerText='Units' width='120' textAlign='Right'/>
            <ColumnDirective field='unitPrice' headerText='Unit Price' width='120' textAlign='Right'
            format='c2' type='number'/>
            <ColumnDirective field='price' headerText='Total Price' width='120' textAlign='Right'
            format='c2' type='number' valueAccessor= {totalPrice}/>
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;


