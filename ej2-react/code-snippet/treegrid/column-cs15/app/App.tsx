

import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Inject, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { orderData } from './datasource';

function App() {
    const currencyFormatter = (field: string, data: object, column: object) => {
        return '€' + getValue('price', data);
    }

    const orderFormatter = (field: string, data: object, column: object) => {
        return data[field] + '-' + getValue('Category', data);
    }

    return <TreeGridComponent dataSource={orderData} treeColumnIndex={1} childMapping='subtasks' height='315'>
        <ColumnsDirective>
            <ColumnDirective field='orderID' headerText='Order ID' width='90' textAlign='Right'/>
            <ColumnDirective field='orderName' headerText='Order Name' width='210' valueAccessor={orderFormatter}/>
            <ColumnDirective field='orderDate' headerText='Order Date' width='110' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='price' headerText='Price' width='80' valueAccessor={currencyFormatter} textAlign='Right' type='number' />
        </ColumnsDirective>
        <Inject services={[Page]}/>
    </TreeGridComponent>
};
export default App;


