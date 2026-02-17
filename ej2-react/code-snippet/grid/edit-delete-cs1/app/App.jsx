import { L10n } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar } from '@syncfusion/ej2-react-grids';
import { Edit, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

L10n.load({
  'en-US': {
    grid: {
      'OKButton': 'YES',
      'CancelButton': 'Discard',
      'ConfirmDelete': 'Are you sure you want to delete the selected Record?'
    }
  }
});
function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, showDeleteConfirmDialog: true };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const toolbarClick = (args) => {
    if (args.item.properties.text === 'Delete') {
      const dialogObj = grid.editModule.dialogObj;
      dialogObj.header = 'Delete Confirmation Dialog';
      dialogObj.showCloseIcon = true;
    }
  }
  return (<div>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbar} height={268} toolbarClick={toolbarClick}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;