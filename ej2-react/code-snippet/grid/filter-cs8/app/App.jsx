import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return <GridComponent dataSource={data} allowFiltering={true} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
      <ColumnDirective field='CustomerID' width='100'/>
      <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
      <ColumnDirective field='ShipCountry' width='100'/>
    </ColumnsDirective>
    <Inject services={[Filter]}/>
  </GridComponent>;
}
export default App;
