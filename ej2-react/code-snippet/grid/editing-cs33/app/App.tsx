

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Page, Toolbar, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import { MouseEventArgs } from '@syncfusion/ej2-base';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  let isDropdown = false;
  const load = (): void => {
    let gridInstance = (document.getElementById('Grid') as HTMLElement).ej2_instances[0];
    if (gridInstance) {
      gridInstance.element.addEventListener('mouseup', function (e) {
        if ((e.target as HTMLElement).classList.contains("e-rowcell")) {
          if (gridInstance.isEdit)
            gridInstance.endEdit();
          let rowInfo = gridInstance.getRowInfo(e.target);
          if (rowInfo.column.field === "ShipCountry")
            isDropdown = true;
          gridInstance.selectRow(rowInfo.rowIndex);
          gridInstance.startEdit();
        };
      });
    }
  }

  const onActionComplete = (args) => {
    if (args.requestType == "beginEdit" && isDropdown) {
      isDropdown = false;
      let dropdownObj = args.form.querySelector('.e-dropdownlist').ej2_instances[0];
      dropdownObj.element.focus();
      dropdownObj.showPopup();
    }
  }
  return <GridComponent dataSource={data} id="Grid" toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} load={load} actionComplete={onActionComplete}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='100' isPrimaryKey={true}></ColumnDirective>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
      <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' width='120' format='C2' ></ColumnDirective>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150'></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Page, Toolbar, Edit]} />
  </GridComponent>
};
export default App;


