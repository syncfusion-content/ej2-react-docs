import { ColumnDirective, ColumnsDirective, GridComponent, Page, PageSettingsModel, SelectionSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const selectionSettings: SelectionSettingsModel = { mode: 'Both', allowColumnSelection: true, type: 'Multiple', persistSelection: true };
  const pageOptions: PageSettingsModel = { pageSize: 8 };
  return (<div>
    <GridComponent dataSource={data} selectionSettings={selectionSettings} allowPaging={true} pageSettings={pageOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;