


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, ContextMenu } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App () {
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        const editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true
        };
        const contextMenuItems = [{ text: 'Copy', target: '.e-content', id: 'copy' },
            { text: 'Paste', target: '.e-content', id: 'paste' }
        ];
    
   let  copiedRecord: any;
   let gantt:any;
  function  contextMenuClick(args:any) {
        if (args.item.id === 'copy') {
            copiedRecord = args.rowData;
            copiedRecord.taskData.TaskID = gantt.currentViewData.length + 1;
        }
        if (args.item.id === 'paste') {
            gantt.addRecord(copiedRecord.taskData,'Below',args.rowData.index);
            if(copiedRecord.hasChildRecords) {
                addChildRecords(copiedRecord, args.rowData.index + 1);
            }
            copiedRecord = undefined;
        }
    };
    function contextMenuOpen(args:any ) {
        if (args.type !== 'Header') {
            if (copiedRecord) {
                args.hideItems.push('Copy');
            } else {
                args.hideItems.push('Paste');
             }
        }
    };
   function  addChildRecords(record: any, index: any) {
        for(var i=0; i<record.childRecords.length; i++) {
              var childRecord = record.childRecords[i];
              childRecord.taskData.TaskID = gantt.currentViewData.length + 1;
              gantt.addRecord(childRecord.taskData,'Below',index);
              if(childRecord.hasChildRecords) {
                 addChildRecords(childRecord, index + (i+1));
              }
        }
      };
        return <GanttComponent dataSource={data} taskFields={taskFields} editSettings={editSettings} enableContextMenu={true} enableContextMenu={true} contextMenuItems={contextMenuItems} contextMenuClick={contextMenuClick} contextMenuOpen={contextMenuOpen} ref={gantt => gantt = gantt} height='450px'>
            <Inject services={[Edit, ContextMenu, Selection]}/>
        </GanttComponent>;
};
ReactDOM.render(<App />, document.getElementById('root'));



