

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { complexData } from './datasource';

function App() {
  return (<div>
    <GridComponent dataSource={complexData} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
        <ColumnDirective field='Name.FirstName' headerText='First Name' width='120' />
        <ColumnDirective field='Name.LastName' headerText='Last Name' width='120' />
        <ColumnDirective field='Title' headerText='Title' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;


