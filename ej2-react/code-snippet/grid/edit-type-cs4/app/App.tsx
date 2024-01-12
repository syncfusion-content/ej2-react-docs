import { Column, ColumnDirective, ColumnsDirective, EditEventArgs, EditSettingsModel, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let isDropdown = false;
  const editOptions: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const created = () => {
    (grid as GridComponent).element.addEventListener('mouseup', (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('e-rowcell')) {
        if ((grid as GridComponent).isEdit) {
          (grid as GridComponent).endEdit();
        }
        let rowInfo = (grid as GridComponent).getRowInfo(e.target as EventTarget);
        if (rowInfo && rowInfo.column && (rowInfo.column as Column).field === 'ShipCountry') {
          isDropdown = true;
          (grid as GridComponent).selectRow((rowInfo.rowIndex as number));
          (grid as GridComponent).startEdit();
        }
      }
    });
  }

  const onActionComplete = (args: EditEventArgs) => {
    if (args.requestType === 'beginEdit' && isDropdown) {
      isDropdown = false;
      let dropdownObj = ((args.form as HTMLFormElement).querySelector('.e-dropdownlist') as HTMLFormElement)['ej2_instances'][0];
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