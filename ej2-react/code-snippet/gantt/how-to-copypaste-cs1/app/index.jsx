import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  GanttComponent,
  Inject,
  Edit,
  Selection,
  ContextMenu,
} from '@syncfusion/ej2-react-gantt';
import { taskData } from './datasource';

function App() {
  const ganttRef = useRef(null);
  let copiedRecord;

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

  const contextMenuItems = [
    { text: 'Copy', target: '.e-content', id: 'copy' },
    { text: 'Paste', target: '.e-content', id: 'paste' },
  ];

  const contextMenuClick = (args) => {
    if (args.item.id === 'copy') {
      copiedRecord = args.rowData;
      // Generate a new TaskID
      copiedRecord.taskData.TaskID = ganttRef.current.currentViewData.length + 1;
    }

    if (args.item.id === 'paste' && copiedRecord) {
        ganttRef.current.addRecord(
        copiedRecord.taskData,
        'Below',
        args.rowData?.index
      );
      if (copiedRecord.hasChildRecords) {
        addChildRecords(copiedRecord, args.rowData?.index + 1);
      }
      copiedRecord = undefined; // Clear copied record after pasting
    }
  };

  const contextMenuOpen = (args) => {
    if (args.type !== 'Header') {
      if (copiedRecord) {
        args.hideItems.push('Copy'); // Hide "Copy" if already copied
      } else {
        args.hideItems.push('Paste'); // Hide "Paste" if nothing is copied
      }
    }
  };

  const addChildRecords = (record, index) => {
    record.childRecords.forEach((childRecord, i) => {
      childRecord.taskData.TaskID = ganttRef.current.currentViewData.length + 1;
      ganttRef.current.addRecord(childRecord.taskData, 'Below', index + i);

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
      ref={ganttRef}
      height="450px"
    >
      <Inject services={[Edit, ContextMenu, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
