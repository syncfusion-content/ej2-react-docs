import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  const data = new DataManager({
    adaptor: new ODataV4Adaptor(),
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/'
  });
  const query = new Query().expand('Employee');
  return <GridComponent dataSource={data} query={query} height={310} allowPaging={true}>
    <Inject services={[Page]} />
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='Employee.City' headerText='City' width='150' />
    </ColumnsDirective>
  </GridComponent>
};
export default App;