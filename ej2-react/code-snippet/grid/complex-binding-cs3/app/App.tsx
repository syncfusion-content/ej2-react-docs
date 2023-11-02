import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  const data: DataManager = new DataManager({
    adaptor: new ODataAdaptor(),
    crossDomain: true,
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders'
  });
  const query = new Query().expand('Employee');
  return <GridComponent dataSource={data} query={query} height={315} allowPaging={true}>
    <Inject services={[Page]} />
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='Employee.City' headerText='City Name' width='150' />
    </ColumnsDirective>
  </GridComponent>
};
export default App;