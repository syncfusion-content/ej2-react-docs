

import { ColumnDirective, ColumnsDirective, GridComponent, Group, GroupSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID', 'ShipCity']
  };
  return <GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={267}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
    </ColumnsDirective>
    <Inject services={[Group]} />
  </GridComponent >
};
export default App;


