

import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { orderData } from './datasource';

function App() {
    return <TreeGridComponent dataSource={orderData} treeColumnIndex={1} childMapping='subtasks' height='315'>
        <ColumnsDirective>
          <ColumnDirective field='orderID' headerText='Order ID' width='90' textAlign='Right'/>
          <ColumnDirective field='orderName' headerText='Order Name' width='180'/>
          <ColumnDirective field='unitPrice' headerText='Price Per Unit' width='90' format='c2' textAlign='Right' type='number' />
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;


