import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return (<div>
    <GridComponent dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" customAttributes={{ class: 'e-attr' }} width="100" textAlign="Right"/>
        <ColumnDirective field="CustomerID" headerText="Customer ID" width="100"/>
        <ColumnDirective field="ShipCity" headerText="Ship City" customAttributes={{ class: 'e-attr' }} width="100"/>
        <ColumnDirective field="ShipCountry" headerText="Ship Country" width="100"/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
