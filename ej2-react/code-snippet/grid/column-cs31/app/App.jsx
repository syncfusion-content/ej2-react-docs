import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const FilterOptions = {
        type: 'Menu'
    };
    const ifilter = { params: { showSpinButton: false } };
    return <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} filterSettings={FilterOptions} height='315'>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' filter={ifilter} textAlign="Right"/>
      <ColumnDirective field='CustomerID' width='100'/>
      <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
      <ColumnDirective field='ShipCountry' width='100'/>
    </ColumnsDirective>
    <Inject services={[Filter]}/>
  </GridComponent>;
}
;
export default App;
