import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App(){
    const taskFields: any = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentId'
  };
  const labelSettings: any = {
    leftLabel: 'TaskId',
    rightLabel: 'Task Name: ${taskData.TaskName}',
    taskLabel: '${Progress}%'
  };
  const projectStartDate = new Date('03/31/2019');
  const projectEndDate = new Date('04/18/2019');
        return <GanttComponent dataSource={data} taskFields={taskFields}
        labelSettings={labelSettings} height = '450px' projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));