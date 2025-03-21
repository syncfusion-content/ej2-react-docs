import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Page, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';
function App() {
  const data = new DataManager({
    adaptor: new CustomAdaptor(),
    url: 'https://services.syncfusion.com/react/production/api/Orders',
  });
  return <div>
    <GridComponent dataSource={data} height={280} allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" width="150" textAlign='Right'/>
        <ColumnDirective field="CustomerID" headerText="Customer ID" width="150"/>
        <ColumnDirective field="EmployeeID" headerText="Employee ID" width="150" textAlign='Right'/>
        <ColumnDirective field="Freight" headerText="Freight" width="150" textAlign='Right'/>
        <ColumnDirective field="ShipCountry" headerText="ShipCountry" width="150"/>
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  </div>
};
export default App;