import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: 'Batch',
  };
  const [enableShowDeleteConfirmDialog, setEnableShowDeleteConfirmDialog] = useState(false);
  const [enableShowConfirmDialog, setEnableShowConfirmDialog] = useState(true);
  const orderidrules = { required: true, number: true };
  const customeridrules = { required: true };
  const freightrules = { min: 1, max: 1000 };
  const toggleShowDeleteConfirmDialog = () => {
    setEnableShowDeleteConfirmDialog(grid.editSettings.showDeleteConfirmDialog = !enableShowDeleteConfirmDialog);
  }
  const toggleShowConfirmDialog = () => {
    setEnableShowConfirmDialog(grid.editSettings.showConfirmDialog = !enableShowConfirmDialog);
  }
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  return (<div><div style={{ padding: "5px" }}>
    <label>Enable/Disable show confirmation dialog</label>
    <SwitchComponent checked={enableShowConfirmDialog} change={toggleShowConfirmDialog}></SwitchComponent></div>
    <div style={{ padding: "5px" }}>
      <label>Enable/Disable show delete confirmation dialog</label>
      <SwitchComponent checked={enableShowDeleteConfirmDialog} change={toggleShowDeleteConfirmDialog}></SwitchComponent></div>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={200}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderidrules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customeridrules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightrules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>);
}
;
export default App;