

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  // The custom function
  let sortAsc: Boolean;
  const sortComparer = (reference: any, comparer: any) => {
    if (sortAsc && reference === null) {
      return 1;
    } else if (sortAsc && comparer === null) {
      return -1;
    } else if (!sortAsc && reference === null) {
      return -1;
    } else if (!sortAsc && comparer === null) {
      return 1;
    } else {
      return reference - comparer;
    }
  };
  const actionBegin = (args: SortEventArgs): void => {
    if (args.requestType === 'sorting') {
      sortAsc = args.direction === 'Ascending' ? true : false;
    }
  };
  return <GridComponent id='grid' dataSource={data} allowSorting={true} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' sortComparer={sortComparer} width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Sort]} />
  </GridComponent>
};
export default App;


