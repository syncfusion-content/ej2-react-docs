import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const sortingOptions = {
        columns: [{ field: 'EmployeeID', direction: 'Ascending' }]
    };
    return <GridComponent dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={270}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
      <ColumnDirective field='CustomerID' width='100'/>
      <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
      <ColumnDirective field='ShipCountry' width='100'/>
    </ColumnsDirective>
    <Inject services={[Sort]}/>
  </GridComponent>;
}
;
export default App;
