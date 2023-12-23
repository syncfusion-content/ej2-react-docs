import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, ContextMenuItemModel, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: GridComponent | null;
  const contextMenuItems: ContextMenuItemModel[] = [
    { text: 'Copy with headers', target: '.e-content', id: 'copywithheader' }
  ];

  const contextMenuClick = (args: MenuEventArgs) => {
    if (grid && args.item.id === 'copywithheader') {
      grid.copy(true);
    }
  }
  return (
    <div>
      <GridComponent dataSource={employeeData} allowPaging={true} allowSelection={true} contextMenuItems={contextMenuItems}
        ref={g => grid = g} contextMenuClick={contextMenuClick}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='140' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='FirstName' headerText='First Name' width='140' />
          <ColumnDirective field='LastName' headerText='Last Name' textAlign='Right' width='140' />
          <ColumnDirective field='City' headerText='City' width='200' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page]} />
      </GridComponent>
    </div>
  );
};
export default App;
