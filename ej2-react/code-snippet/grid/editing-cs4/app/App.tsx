

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  let isAddable: Boolean = true;

  const btnClick = (args) => {
    args.target.innerText == 'Grid is Addable' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
    isAddable = !isAddable;
  }
  const cellEdit = (args) => {
    if (args.rowData['Role'] == 'Employee') {
      args.cancel = true;
    }
  }
  const beforeBatchAdd = (args) => {
    if (!isAddable) {
      args.cancel = true;
    }
  }
  const beforeBatchDelete = (args) => {
    if (args.rowData['Role'] == 'Employee') {
      args.cancel = true;
    }
  }
  return (<div>
    <button onClick={btnClick}>Grid is Addable</button>
    <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} cellEdit={cellEdit} beforeBatchAdd={beforeBatchAdd} beforeBatchDelete={beforeBatchDelete} height={240}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='Role' headerText='Role' width='120' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent>
  </div>)
};
export default App;


