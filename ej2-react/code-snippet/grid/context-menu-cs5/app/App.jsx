import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, ContextMenuItem, Inject, Page, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const contextMenuItems = ['Copy', 'Edit', 'Delete'];
  const editSettings = { allowEditing: true, allowDeleting: true };
  const change = (args) => {
    if (args.checked) {
      grid.contextMenuModule.contextMenu.hideItems(['Edit Record', 'Delete Record']);
    } else {
      grid.contextMenuModule.contextMenu.showItems(['Edit Record', 'Delete Record']);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px" }}>Show or hide context menu items</label>
      <SwitchComponent change={change}></SwitchComponent>
      <GridComponent dataSource={data} allowPaging={true} contextMenuItems={contextMenuItems} editSettings={editSettings} ref={g => grid = g} >
        <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='120' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page, Edit]} />
      </GridComponent>
    </div>
  );
}
export default App;