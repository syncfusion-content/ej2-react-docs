import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, ContextMenu, Sort, Resize, EditSettingsModel, IGanttData } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    let ganttInstance;
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
  const contextMenuItems = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel', 'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
        ];
   function contextMenuClick (args) {
        let record = args.rowData;
        if (args.item.id === 'collapserow') {
            ganttInstance.collapseByID(Number(record.ganttProperties.taskId));
            }
        if (args.item.id === 'expandrow') {
            ganttInstance.expandByID(Number(record.ganttProperties.taskId));
            }
        if (args.item.id === 'hidecols') {
            ganttInstance.hideColumn(args.column.headerText);
        }
        };
    function contextMenuOpen (args) {
        let record = args.rowData;
            if (args.type !== 'Header') {
                if (!record.hasChildRecords) {
                    args.hideItems.push('Collapse the Row');
                    args.hideItems.push('Expand the Row');
                } else {
                    if(record.expanded){
                    args.hideItems.push("Expand the Row");
                    } else {
                    args.hideItems.push("Collapse the Row");
                    }
                }
            }
        };
        return <GanttComponent dataSource={data} taskFields={taskFields} editSettings={editSettings} allowSorting={true} allowResizing={true} enableContextMenu={true} contextMenuItems={contextMenuItems} contextMenuClick={contextMenuClick} contextMenuOpen={contextMenuOpen} ref={gantt => ganttInstance = gantt} height = '450px'>
            <Inject services={[Edit, ContextMenu, Selection, Sort, Resize]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));