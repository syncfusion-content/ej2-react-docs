import { ColumnDirective, ColumnsDirective, GridComponent, Inject, RowDD, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { sampleGridData } from './datasource';
import { TreeGridComponent, Edit as TreeEdit } from '@syncfusion/ej2-react-treegrid';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

function App() {
  let grid;
  let treeGrid;
  const rowDropOptions = { targetID: 'treeGrid' };
  const selectionOptions = { type: 'Multiple' };
  const gridEditSettings = { allowDeleting: true };
  const treeGridEditSettings = { allowAdding: true, allowEditing: true };
  const onRowDrop = ((args) => {
    if (args.target.closest('.e-treegrid')) {
      args.cancel = true;
      var rowIndex = !isNullOrUndefined(args.target.closest('.e-row')) ? args.target.closest('.e-row').rowIndex : 0;
      for (var i = 0; i < args.data.length; i++) {
        treeGrid.addRecord(args.data[i], rowIndex);
        grid.deleteRecord('taskID', args.data[i]);
      }
    }
  })
  return (<div>
    <GridComponent id="Grid" ref={g => grid = g} dataSource={sampleGridData} height={315} allowRowDragAndDrop={true} rowDrop={onRowDrop} editSettings={gridEditSettings} selectionSettings={selectionOptions} rowDropSettings={rowDropOptions}>
      <ColumnsDirective>
        <ColumnDirective field='taskID' isPrimaryKey={true} headerText='Task ID' width='140' textAlign='Right' />
        <ColumnDirective field='taskName' headerText='Task Name' width='140' />
        <ColumnDirective field='description' headerText='Description' width='150' />
        <ColumnDirective field='startDate' headerText='Start Date' width='150' format='yMd' textAlign='Right' />
        <ColumnDirective field='duration' headerText='Duration' width='150' textAlign='Right' />
      </ColumnsDirective>
      <Inject services={[RowDD, Edit]} />
    </GridComponent>
    <TreeGridComponent id="treeGrid" ref={t => treeGrid = t} childMapping='subtasks' editSettings={treeGridEditSettings}>
      <ColumnsDirective>
        <ColumnDirective field='taskID' isPrimaryKey={true} headerText='Task ID' width='140' textAlign='Right' />
        <ColumnDirective field='taskName' headerText='Task Name' width='140' />
        <ColumnDirective field='startDate' headerText='Start Date' width='150' format='yMd' textAlign='Right' />
        <ColumnDirective field='duration' headerText='Duration' width='150' textAlign='Right' />
      </ColumnsDirective>
      <Inject services={[TreeEdit]} />
    </TreeGridComponent>
  </div>)
};
export default App;


