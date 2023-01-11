

import { GridComponent, ColumnsDirective, ColumnDirective, IEditCell, Edit, Column, Inject, Toolbar, Page, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { MaskedTextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  let element: HTMLElement;
  let maskObj: MaskedTextBox;
  const create = () => {
    element = document.createElement('input');
    return element;
  };
  const destroy = () => {
    maskObj.destroy();
  };
  const read = () => {
    return maskObj.value;
  };
  const write = (args: { rowData: Object, column: Column }) => {
    maskObj = new MaskedTextBox({
      mask: "0-0-0-0",
      value: args.rowData.Mask
    });
    maskObj.appendTo(element);
  };
  const params: IEditCell = {
    create: create,
    destroy: destroy,
    read: read,
    write: write
  };
  return (<GridComponent dataSource={data} allowPaging={true} editSettings={editOptions} toolbar={toolbarOptions} ref={(g) => (grid = g)} height={250}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} width="100" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width="120" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width="120" type='string' />
      <ColumnDirective field='Mask' headerText='Mask' type='string' width="140" edit={params} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>
  );
};
export default App;


