import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Edit, Inject, Toolbar, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: 'Normal',
  };
  const [enableShowDeleteConfirmDialog, setEnableShowDeleteConfirmDialog] = useState(false);
  const orderidrules: object = { required: true, number: true };
  const customeridrules: object = { required: true };
  const freightrules: object = { min: 1, max: 1000 };
  const toggleShowDeleteConfirmDialog = () => {
    setEnableShowDeleteConfirmDialog((grid as GridComponent).editSettings.showDeleteConfirmDialog = !enableShowDeleteConfirmDialog);
  }
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  return (<div><div style={{ padding: "20px" }}>
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