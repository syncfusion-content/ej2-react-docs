import { ColumnDirective, ColumnsDirective, GridComponent, GroupEventArgs, Inject, Group } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState('');
  const actionBegin = (args: GroupEventArgs) => {
    if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
      args.cancel = true;
    }
  }
  const actionComplete = (args: GroupEventArgs) => {
    if (args.requestType === 'grouping') {
    setMessage(args.requestType + ' action completed for ' + args.columnName + ' column');
    }
    else{
      setMessage('');
    }
  }
  return (<div>
    <div style={{ marginLeft: "100px" }}><p style={{ color: "red" }} id="message">{message}</p></div>
    <GridComponent dataSource={data} allowGrouping={true} height={315} actionBegin={actionBegin} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Group]} />
    </GridComponent></div>)
};
export default App;