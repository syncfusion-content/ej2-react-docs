

import { ColumnDirective, ColumnsDirective, GridComponent, Group, GroupSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const groupOptions: GroupSettingsModel = {
    columns: ['OrderDate', 'Freight'],
    showDropArea: false
  };
  return <GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='OrderDate' headerText='Order Date' format='yMMM' enableGroupByFormat={true} width='150' />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' enableGroupByFormat={true} width='150' />
    </ColumnsDirective>
    <Inject services={[Group]} />
  </GridComponent >
};
export default App;


