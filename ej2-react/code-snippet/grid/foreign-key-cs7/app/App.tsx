import { ColumnDirective, ColumnsDirective, ForeignKey, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import * as React from 'react';

function App() {
  const data: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new ODataV4Adaptor(),
    crossDomain: true
  });
  const employeeData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees/',
    adaptor: new ODataV4Adaptor(),
    crossDomain: true
  });
  return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' dataSource={employeeData} headerText='Employee Name' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
    </ColumnsDirective>
    <Inject services={[ForeignKey]} />
  </GridComponent>;
};
export default App;