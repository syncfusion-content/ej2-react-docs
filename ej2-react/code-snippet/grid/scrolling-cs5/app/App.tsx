import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return (<div style={{ height: '500px', width: '600px' }}>
    <GridComponent dataSource={data} height='100%' width='100%'>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
        <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;