import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
   const  taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const  timelineSettings = {
    showTooltip: true
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
            timelineSettings={timelineSettings} height = '450px'>
      </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));