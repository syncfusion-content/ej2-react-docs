import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return (<div>
    <GridComponent dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="<span> Order ID </span>" disableHtmlEncode={true} width="140" textAlign="Right"/>
        <ColumnDirective field="CustomerID" headerText="<span> Customer ID </span>" disableHtmlEncode={false} width="100"/>
        <ColumnDirective field="EmployeeID" headerText="Employee ID" width="100" textAlign="Right"/>
        <ColumnDirective field="Freight" headerText="Freight" width="80" format="C2" textAlign="Right"/>
        <ColumnDirective field="ShipCountry" headerText="Ship Country" width="100"/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
