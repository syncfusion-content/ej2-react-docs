import { ColumnDirective, ColumnsDirective, GridComponent, Inject, SelectionSettingsModel, RowDD, RowDropSettingsModel, Edit, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { sampleGridData } from './datasource';
import { TreeGridComponent, TreeGrid, Edit as TreeEdit, EditSettingsModel as TreeEditSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

function App() {
  let grid: GridComponent | null;
  let treeGrid: TreeGrid | null;
  const rowDropOptions: RowDropSettingsModel = { targetID: 'treeGrid' };
  const selectionOptions: SelectionSettingsModel = { type: 'Multiple' };
  const gridEditSettings: EditSettingsModel = { allowDeleting: true };
  const treeGridEditSettings: TreeEditSettingsModel = { allowAdding: true, allowEditing: true };
  const onRowDrop = ((args) => {
    if (args.target.closest('.e-treegrid')) {
      args.cancel = true;
      var rowIndex = !isNullOrUndefined(args.target.closest('.e-row')) ? args.target.closest('.e-row').rowIndex : 0;
      for (var i = 0; i < args.data.length; i++) {
        (treeGrid as TreeGrid).addRecord(args.data[i], rowIndex);
        (grid as GridComponent).deleteRecord('taskID', args.data[i]);
      }
    }
  })
  return (<div>
    <GridComponent id="Grid" ref={g => grid = g} dataSource={sampleGridData} height={315} allowRowDragAndDrop={true} rowDrop={onRowDrop} editSettings={gridEditSettings} selectionSettings={selectionOptions} rowDropSettings={rowDropOptions}>
      <ColumnsDirective>
        <ColumnDirective field='taskID' headerText='Task ID' width='140' />
        <ColumnDirective field='taskName' headerText='Task Name' width='140' />
        <ColumnDirective field='description' headerText='Description' width='150' />
        <ColumnDirective field='startDate' headerText='Start Date' width='150' format='yMd' />
        <ColumnDirective field='duration' headerText='Duration' width='150' />
      </ColumnsDirective>
      <Inject services={[RowDD, Edit]} />
    </GridComponent>
    <TreeGridComponent id="treeGrid" ref={t => treeGrid = t} childMapping='subtasks' editSettings={treeGridEditSettings}>
      <ColumnsDirective>
        <ColumnDirective field='taskID' headerText='Task ID' width='140' />
        <ColumnDirective field='taskName' headerText='Task Name' width='140' />
        <ColumnDirective field='startDate' headerText='Start Date' width='150' format='yMd' />
        <ColumnDirective field='duration' headerText='Duration' width='150' />
      </ColumnsDirective>
      <Inject services={[TreeEdit]} />
    </TreeGridComponent>
  </div>)
};
export default App;


