

import { ActionEventArgs, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { GridComponent, Group, GroupSettingsModel, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const groupOptions: GroupSettingsModel = { columns: ['CustomerID'] };
  const actionHandler = (args: ActionEventArgs) => {
    /** Custom Action */
    alert(args.requestType + ' ' + args.type);
  }
  return (<div>
    <GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions}
      actionBegin={actionHandler} actionComplete={actionHandler} height={280}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
      <Inject services={[Group]} />
    </GridComponent ></div>)
};
export default App;


