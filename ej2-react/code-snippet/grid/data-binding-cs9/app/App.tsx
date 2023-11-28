

import { DataManager } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Filter, PageSettingsModel  } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  const data = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/Orders'
  });
  const pageOptions: PageSettingsModel = {pageSize:5, pageCount:5};
  const loadingIndicator = { indicatorType: 'Shimmer' };
  return <GridComponent dataSource={data} allowPaging={true} pageSettings={pageOptions} height={315} allowFiltering={true} allowSorting={true} loadingIndicator={loadingIndicator}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
    </ColumnsDirective>
    <Inject services={[Page, Sort, Filter]} />
  </GridComponent>
};
export default App;


