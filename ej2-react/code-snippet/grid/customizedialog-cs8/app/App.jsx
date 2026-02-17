import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject, KeyboardEventArgs, SelectionSettingsModel, Group } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions = ['Add', 'Edit', 'Delete'];
  const selectionSettings = { type: 'Multiple' };
  const keyPressed = (e) => {
    const key = e.key.toLowerCase();
    switch (key) {
      case 'n':
        e.preventDefault();
        grid.addRecord();
        break;
      case 's':
        if (e.ctrlKey) {
          e.preventDefault();
          grid.endEdit();
        }
        break;
      case 'd':
        if (e.ctrlKey) {
          e.preventDefault();
          grid.deleteRecord();
        }
        break;
      case 'a':
        if (e.ctrlKey) {
          e.preventDefault();
          grid.selectRowsByRange(0);
        }
        break;
      case 'g':
        if (e.ctrlKey) {
          e.preventDefault();
          grid.groupColumn('CustomerID');
        }
        break;
      case 'enter':
        e.preventDefault();
        e.cancel = true;
        grid.refreshColumns();
        break;
      case 'insert':
        e.preventDefault();
        e.cancel = true;
        break;
      case 'delete':
        e.preventDefault();
        e.cancel = true;
        break;
      case 'f2':
        e.preventDefault();
        e.cancel = true;
        break;
      case '" "':
        if (e.ctrlKey) {
          e.preventDefault();
          e.cancel = true;
        }
        break;
      // Add more custom shortcuts as needed
    }
  }
  return <GridComponent ref={g => grid = g} dataSource={data} keyPressed={keyPressed} allowGrouping={true}
    editSettings={editOptions} toolbar={toolbarOptions} height={265} selectionSettings={selectionSettings}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Group]} />
  </GridComponent>
};
export default App;