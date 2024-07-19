import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, Page, Sort, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';
import { orderData } from './datasource';
function App() {
  const FilterOptions = {
    type: 'Excel'
  };
  const pageOptions = { pageSize: 12 }
  const actionBegin = (args) => {
    const hostUrl = 'https://services.syncfusion.com/react/production/';
    if (args.requestType === "filterBeforeOpen") {
      // Assign custom remote data source to the filter module data source
      args.filterModel.options.dataSource = new DataManager({ url: hostUrl + 'api/Orders', adaptor: new WebApiAdaptor });
    }
  }
  return <GridComponent dataSource={orderData} filterSettings={FilterOptions} allowFiltering={true} height={273} allowPaging={true} pageSettings={pageOptions} allowSorting={true} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" />
      <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' />
    </ColumnsDirective>
    <Inject services={[Filter, Page, Sort]} />
  </GridComponent>
};
export default App;