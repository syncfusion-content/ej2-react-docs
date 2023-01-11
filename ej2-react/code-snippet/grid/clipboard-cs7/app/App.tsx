


import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu,EditSettingsModel, ContextMenuItemModel, Inject, Page, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  let values;
  const editOptions: EditSettingsModel = { allowAdding: true, allowEditing: true, allowDeleting: true };
  const contextMenuItems: ContextMenuItemModel[] = ['Copy', 'Edit', 'Delete', 'Save', 'Cancel'];
  const created = (args): void => {
    grid.contextMenuModule.contextMenu.beforeOpen = (args) => {
      if (args.event && args.event.which === 3)
        args.cancel = true;
      args.event = values;
      grid.contextMenuModule.contextMenuBeforeOpen(args);
    };
  }

  const onClick = (event): void => {
    values = event;
    grid.contextMenuModule.contextMenu.open(
      values.pageY + pageYOffset,
      values.pageX + pageXOffset
    );
  }
  return (
    <div>
      <GridComponent dataSource={data} allowPaging={true} contextMenuItems={contextMenuItems} editSettings={editOptions}
        ref={g => grid = g} created={created} onClick={onClick}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey='true' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' />
          <ColumnDirective field='Freight' headerText='Freight' format='C2' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page, Edit]} />
      </GridComponent>
    </div>
  );
}
export default App;


