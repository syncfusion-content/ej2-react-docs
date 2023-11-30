import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState('');
  const actionBegin = (args: SortEventArgs) => {
    if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
      args.cancel = true;
    }
  }
  const actionComplete = (args: SortEventArgs) => {
    setMessage(args.requestType + ' action completed for ' + args.columnName + ' column');
  }
  return (<div>
    <div style={{ marginLeft: "100px" }}><p style={{ color: "red" }} id="message">{message}</p></div>
    <GridComponent dataSource={data} allowSorting={true} height={315} actionBegin={actionBegin} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;


