

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Page, Toolbar, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const gridRef: React.RefObject<GridComponent> = React.useRef<GridComponent>(null);
  const onMouseUp = (e: React.MouseEvent<HTMLElement>): void => {
    if ((e.target as HTMLElement).classList.contains("e-rowcell")) {
      if (gridRef.current?.isEdit)
        gridRef.current?.endEdit();
      let index: number = parseInt((e.target as HTMLElement).getAttribute("data-index") as string, 10);
      gridRef.current?.selectRow(index);
      gridRef.current?.startEdit();
    };
  }
  return <GridComponent ref={gridRef} dataSource={data} id="Grid" toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} onMouseUp={onMouseUp}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='100' isPrimaryKey={true}></ColumnDirective>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
      <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' width='120' format='C2' ></ColumnDirective>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Page, Toolbar, Edit]} />
  </GridComponent>
};
export default App;


