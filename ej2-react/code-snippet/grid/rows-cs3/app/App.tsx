

import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, RowDataBoundEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource';

interface OrderDetails {
  OrderID?: number;
}

function App() {
  const rowDataBound = (args: RowDataBoundEventArgs) => {
    if ((args.data as OrderDetails).OrderID === 10249) {
      args.rowHeight = 90;
    }
  }
  const gridData: Object = new DataManager(data).executeLocal(new Query().take(8));
  return (<div>
    <GridComponent dataSource={gridData} height={315} rowDataBound={rowDataBound}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" />
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='140' format='yMd' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;


