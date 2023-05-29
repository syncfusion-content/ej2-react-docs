

import { GridComponent, ColumnsDirective, ColumnDirective, IEditCell, Edit, Inject, Toolbar, Page, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  let element: HTMLElement;
  let dropdownobj: DropDownList;
  let grid: Grid | null;
  const create = () => {
    element = document.createElement('input');
    return element;
  };
  const destroy = () => {
    dropdownobj.destroy();
  };
  const read = () => {
    return dropdownobj.value;
  };
  const write = (args) => {
    dropdownobj = new DropDownList({
      dataSource: data,
      value: args.rowData[args.column.field],
      query: new Query().select(['EmployeeID', 'ShipCountry']).take(10),
      fields: { text: 'ShipCountry', value: 'ShipCountry' },
      placeholder: 'Select a Country',
      headerTemplate: '<table><tr><th>EmployeeID</th><th>ShipCountry</th></tr></table>',
      itemTemplate: '<div class="e-grid"><table class="e-table"><tbody><tr><td class="e-rowcell">${EmployeeID}</td><td class="e-rowcell">${ShipCountry}</td></tr> </tbody></table></div>'
    });
    dropdownobj.appendTo(element);
  };
  const params: IEditCell = {
    create: create,
    destroy: destroy,
    read: read,
    write: write
  };
  return (<GridComponent dataSource={data} allowPaging={true} editSettings={editOptions} toolbar={toolbarOptions} ref={(g) => (grid = g)} height={250}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' type='string' edit={params} width='300' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>
  );
}
export default App;



