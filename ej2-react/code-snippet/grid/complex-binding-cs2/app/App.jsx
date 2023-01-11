import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { complexData } from './datasource';
function App() {
    return (<div>
    <GridComponent dataSource={complexData} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
        <ColumnDirective field='Names.0.LastName' headerText='Last Name' width='120'/>
        <ColumnDirective field='Region' headerText='Region' width='120'/>
        <ColumnDirective field='City' headerText='City' width='150'/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
