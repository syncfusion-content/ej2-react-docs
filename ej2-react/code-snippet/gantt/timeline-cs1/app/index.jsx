import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields= {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const timelineSettings = {
    topTier: {
      format: 'MMM',
      unit: 'Month'
  },
      bottomTier: {
      unit: 'Day'
}
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
        timelineSettings={timelineSettings} height = '450px'>
      </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));