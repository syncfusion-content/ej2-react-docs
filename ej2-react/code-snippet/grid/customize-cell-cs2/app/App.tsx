
import {  ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return (<div>
    <GridComponent dataSource={data} height={315} enableHover={false} allowSelection={false}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" customAttributes={{class: 'custom-css'}} width="100" textAlign="Right" />
        <ColumnDirective field="CustomerID" headerText="Customer ID" width="100" />
        <ColumnDirective field="EmployeeID" headerText="Employee ID" customAttributes={{class: 'custom-css'}} width="100" textAlign="Right" />
        <ColumnDirective field="Freight" headerText="Freight" width="80" textAlign="Right" format="C2" />
        <ColumnDirective field="ShipCountry" headerText="Ship Country" width="100" />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;


