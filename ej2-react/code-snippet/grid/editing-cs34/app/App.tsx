

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Page, Toolbar, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const load = (): void => {
    let instance = (document.getElementById('Grid') as HTMLElement).ej2_instances[0];
    if (instance) {
      instance.element.addEventListener('mouseup', (e: MouseEventArgs) => {
        if ((e.target as HTMLElement).classList.contains("e-rowcell")) {
          let index: number = parseInt((e.target as HTMLElement).parentElement.getAttribute("data-rowindex"));
          let colindex: number = parseInt((e.target as HTMLElement).getAttribute("data-colindex"));
          let field: string = instance.getColumns()[colindex].field;
          instance.editModule.editCell(index, field);
        };
      });
    }
  }
  return <GridComponent dataSource={data} id="Grid" toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} load={load.bind(this)}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='100' isPrimaryKey={true}></ColumnDirective>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
      <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' width='120' format='C2' ></ColumnDirective>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Page, Toolbar, Edit]} />
  </GridComponent>
}

export default App
