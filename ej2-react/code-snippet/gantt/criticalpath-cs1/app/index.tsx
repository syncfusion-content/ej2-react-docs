import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Toolbar, ToolbarItem, CriticalPath } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
   const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const editOptions: EditSettingsModel = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
  };
  const toolbarOptions: ToolbarItem[] = ['CriticalPath'];
        return <GanttComponent dataSource={data} taskFields={taskFields} enableCriticalPath={true}
        editSettings={editOptions} toolbar={toolbarOptions} height = '450px'>
            <Inject services={[Edit, CriticalPath, Toolbar]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));