

import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const settings: SelectionSettingsModel = { cellSelectionMode: 'Box', type: 'Multiple', mode: 'Cell' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Update', 'Cancel'];
  return <GridComponent dataSource={data} toolbar={toolbarOptions}
    editSettings={editOptions} selectionSettings={settings}
    enableAutoFill={true} height={272}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} visible={false} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent >
};
export default App;


