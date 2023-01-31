import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { orderData } from './datasource';
function App() {
    const formatOption = { type: 'date', format: 'dd/MM/yyyy' };
    return <TreeGridComponent dataSource={orderData} treeColumnIndex={1} childMapping='subtasks' height='315'>
        <ColumnsDirective>
          <ColumnDirective field='orderID' headerText='Order ID' width='90' textAlign='Right'/>
          <ColumnDirective field='orderName' headerText='Order Name' width='180'/>
          <ColumnDirective field='orderDate' headerText='Order Date' width='160' textAlign='Right' format={formatOption}/>
          <ColumnDirective field='price' headerText='Price' width='90' format='c2' textAlign='Right' type='number'/>
        </ColumnsDirective>
    </TreeGridComponent>;
}
;
export default App;
