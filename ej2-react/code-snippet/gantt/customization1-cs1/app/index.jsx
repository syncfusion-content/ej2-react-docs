import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App(){
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const labelSettings = {
    leftLabel: 'TaskID',
    rightLabel: 'Task Name: ${taskData.TaskName}',
    taskLabel: '${Progress}%'
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
        labelSettings={labelSettings} height = '450px'>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));