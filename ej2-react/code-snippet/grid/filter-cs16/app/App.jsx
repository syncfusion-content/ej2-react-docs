import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page, Sort } from '@syncfusion/ej2-react-grids'
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState('');
  const actionBegin = (args) => {
    if (args.requestType === 'filtering' && args.currentFilteringColumn === 'ShipCity') {
      args.cancel = true;
      setMessage('The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action is cancelled for ' + args.currentFilteringColumn);
    }
  }

  const actionComplete = (args) => {
    if (args.requestType === 'filtering' && args.currentFilteringColumn) {
      setMessage('The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action for the ' + args.currentFilteringColumn + ' column has been successfully executed');
    } else {
      setMessage('');
    }
  }
  return (<div>
    <div id='message'>{message}</div>
    <GridComponent dataSource={data} allowFiltering={true} actionBegin={actionBegin} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Filter, Page, Sort]} />
    </GridComponent>
  </div>)
}
export default App;