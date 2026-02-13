
import { SortEventArgs, ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let action: string;
  const sortComparer = (reference:any, comparer:any) => {
    let sortAsc = action === "Ascending" ? true : false;
    if (sortAsc && reference === null) {
        return 1;
    }
    else if (sortAsc && comparer === null) {
        return -1;
    }
    else if (!sortAsc && reference === null) {
        return -1;
    }
    else if (!sortAsc && comparer === null) {
        return 1;
    } else {
        return reference - comparer;
    }
  };
  const actionBegin= function(args: SortEventArgs) {
    if (args.requestType == "sorting") {
        action = args.direction as string;
    }
 }
  return <GridComponent dataSource={data} actionBegin={actionBegin} height={315} allowSorting={true}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID'  headerText='Customer ID' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' />
      <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd'  sortComparer={sortComparer} width='120' textAlign="Right" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
    </ColumnsDirective>
    <Inject services={[Sort]} />
  </GridComponent>
};
export default App;


