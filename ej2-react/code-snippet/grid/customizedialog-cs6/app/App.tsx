

import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { BatchAddArgs, Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, mode: 'Batch' };
  const toolbarOptions: ToolbarItems[] = ['Edit', 'Update', 'Cancel'];
  const cellEdit = (args: BatchAddArgs): void => {
    if (getValue('value', args) === "France") {
      args.cancel = true;
    }
  }
  return <GridComponent dataSource={data} cellEdit={cellEdit}
    editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
}
export default App;


