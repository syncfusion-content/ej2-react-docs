

import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const pageOptions: PageSettingsModel = {
    pageSizes: ['5', '10', '15', '20', 'All']
  };
  return (<GridComponent dataSource={data} allowPaging={true} height={268} pageSettings={pageOptions}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
    </ColumnsDirective>
    <Inject services={[Page]} />
  </GridComponent>)
};
export default App;


