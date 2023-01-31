

import { ContextMenuItemModel } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, Page, TreeGridComponent,ContextMenu, Edit, Inject, PageSettingsModel, TreeGrid} from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
  let treegrid: TreeGridComponent | null;
  const pageSettings: PageSettingsModel = { pageSize: 7 };
  const editSettings: EditSettingsModel = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Row',
  };
  const contextMenuItems: ContextMenuItemModel[] = [
    { text: 'Edit Record', target: '.e-content', id: 'Edit_record' },
    { text: 'Delete Record', target: '.e-content', id: 'Delete_record' },
  ];
  const contextMenuClick = (args: any): void => {
    if (treegrid) {
      if (args.element.innerHTML === 'Edit Record') {
        treegrid.startEdit(args.rowInfo.row);
      } else if (args.element.innerHTML === 'Delete Record') {
        treegrid.deleteRecord(args.rowInfo.row);
      }
    }
  }

  const contextMenuOpen = (args: any): void => {
    if (treegrid) {
      if (args.rowInfo.rowData.hasChildRecords === true) {
        treegrid.grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],true);
        treegrid.grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],false);
      } else {
        treegrid.grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],false);
        treegrid.grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],true);
      }
    }
  }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' pageSettings={pageSettings} editSettings = {editSettings} contextMenuItems={contextMenuItems} contextMenuClick={contextMenuClick} ref={g => treegrid = g} contextMenuOpen={contextMenuOpen}>
        <ColumnsDirective>
        <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
        <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
        <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
        <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page, Edit]}/>
    </TreeGridComponent>
};
export default App;


