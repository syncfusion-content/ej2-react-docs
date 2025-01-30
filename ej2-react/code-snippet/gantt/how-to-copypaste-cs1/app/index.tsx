import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, ContextMenu, Gantt } from '@syncfusion/ej2-react-gantt';
import { taskData } from './datasource';

function App() {
  const ganttRef = useRef<Gantt | null>(null);

  let copiedRecord: any = null;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentId'
  };

  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
  };

  // Context menu items as a plain array
  const contextMenuItems = [
    { text: 'Copy', target: '.e-content', id: 'copy' },
    { text: 'Paste', target: '.e-content', id: 'paste' },
  ];

  const contextMenuClick = (args: any): void => {
    const gantt = ganttRef.current;

    if (!gantt) return;

    if (args.item.id === 'copy') {
      copiedRecord = args.rowData;
      copiedRecord.taskData.TaskID = gantt.currentViewData.length + 1; // Assign unique TaskID
    }

    if (args.item.id === 'paste' && copiedRecord) {
      gantt.addRecord(copiedRecord.taskData, 'Below', args.rowData.index);

      if (copiedRecord.hasChildRecords) {
        addChildRecords(copiedRecord, args.rowData.index + 1);
      }

      copiedRecord = null;
    }
  };

  const contextMenuOpen = (args: any): void => {
    if (args.type !== 'Header') {
      if (copiedRecord) {
        args.hideItems.push('Copy');
      } else {
        args.hideItems.push('Paste');
      }
    }
  };

  const addChildRecords = (record: any, index: number): void => {
    const gantt = ganttRef.current;

    if (!gantt) return;

    record.childRecords.forEach((childRecord: any, i: number) => {
      childRecord.taskData.TaskID = gantt.currentViewData.length + 1; // Assign unique TaskID
      gantt.addRecord(childRecord.taskData, 'Below', index + i);

      if (childRecord.hasChildRecords) {
        addChildRecords(childRecord, index + i + 1);
      }
    });
  };

  return (
    <GanttComponent
      dataSource={taskData}
      taskFields={taskFields}
      editSettings={editSettings}
      enableContextMenu={true}
      contextMenuItems={contextMenuItems}
      contextMenuClick={contextMenuClick}
      contextMenuOpen={contextMenuOpen}
      ref={(gantt) => (ganttRef.current = gantt)}
      height="450px"
    >
      <Inject services={[Edit, ContextMenu, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
