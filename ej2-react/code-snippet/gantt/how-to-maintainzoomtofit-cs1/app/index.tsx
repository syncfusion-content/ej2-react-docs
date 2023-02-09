

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, Edit, Selection, ToolbarItem }from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    let  ganttInstance: any;
   const  taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  };
  const  editSettings: any = {
    allowEditing: true,
    allowTaskbarEditing: true
  };
  const  toolbarOptions: ToolbarItem[] = ['Edit','ZoomToFit'];
  function actionComplete(args) {
    if ((args.action === "CellEditing" || args.action === "DialogEditing") && args.requestType === "save") {
        ganttInstance.dataSource = data;
        ganttInstance.fitToProject();
      }
  };
  function taskbarEdited(args) {
      if (args) {
        ganttInstance.dataSource = data;
        ganttInstance.fitToProject();
      }
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
        toolbar={toolbarOptions} editSettings={editSettings} actionComplete={actionComplete} taskbarEdited={taskbarEdited} height = '450px' ref={gantt => ganttInstance = gantt}>
           <Inject services={[Toolbar, Edit, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));


