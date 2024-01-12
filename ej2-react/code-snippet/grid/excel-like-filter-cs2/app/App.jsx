import { ColumnDirective, ColumnsDirective, Page } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const FilterOptions = {
    type: 'Excel'
  };
  const actionBegin = (args) => {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
      args.filterChoiceCount = 3000;
    }
  }
  return <GridComponent dataSource={data} filterSettings={FilterOptions} allowFiltering={true} height={273} allowPaging={true} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ProductName' headerText='ProductName' width='100' />
      <ColumnDirective field='Quantity' headerText='Quantity' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter, Page]} />
  </GridComponent>
};
export default App;