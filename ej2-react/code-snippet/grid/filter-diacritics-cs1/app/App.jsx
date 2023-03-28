import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { diacriticsData } from './datasource';
function App() {
    const FilterOptions = {
        ignoreAccent: true
    };
    return <GridComponent dataSource={diacriticsData} filterSettings={FilterOptions} allowFiltering={true}>
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' width='140' textAlign="Right"/>
      <ColumnDirective field='Name' width='140'/>
      <ColumnDirective field='ShipName' width='170' textAlign="Right"/>
      <ColumnDirective field='CustomerID' width='140' textAlign="Right"/>
    </ColumnsDirective>
    <Inject services={[Filter]}/>
  </GridComponent>;
}
;
export default App;
