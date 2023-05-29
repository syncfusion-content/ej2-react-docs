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
  function queryTaskbarInfo(args: any): void {
      if ((args.data.isCritical || args.data.slack === '0 day') && !args.data.hasChildRecords) {
          args.taskbarBgColor = 'rgb(242, 210, 189)';
          args.progressBarBgColor = 'rgb(201, 169, 166)';
        }
    }
  const toolbarOptions: ToolbarItem[] = ['CriticalPath'];
        return <GanttComponent dataSource={data} taskFields={taskFields} height = '450px' queryTaskbarInfo={queryTaskbarInfo} enableCriticalPath={true}
        editSettings={editOptions} toolbar={toolbarOptions}>
            <Inject services={[Edit, CriticalPath, Toolbar]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));