import { Column, ColumnDirective, ColumnsDirective, EditEventArgs, EditSettingsModel, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let isDropdown = false;
  const editOptions = { allowAdding: true, allowDeleting: true, allowEditing: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const created = () => {
    grid.element.addEventListener('mouseup', (e) => {
      if (e.target.classList.contains('e-rowcell')) {
        if (grid.isEdit) {
          grid.endEdit();
        }
        let rowInfo = grid.getRowInfo(e.target);
        if (rowInfo && rowInfo.column && rowInfo.column.field === 'ShipCountry') {
          isDropdown = true;
          grid.selectRow(rowInfo.rowIndex);
          grid.startEdit();
        }
      }
    });
  }

  const onActionComplete = (args) => {
    if (args.requestType === 'beginEdit' && isDropdown) {
      isDropdown = false;
      let dropdownObj = args.form.querySelector('.e-dropdownlist')['ej2_instances'][0];
      dropdownObj.element.focus();
      dropdownObj.showPopup();
    }
  }
  return <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={273} allowPaging={true} created={created} actionComplete={onActionComplete}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>
};
export default App;