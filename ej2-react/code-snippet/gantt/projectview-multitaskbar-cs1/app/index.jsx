import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { projectViewMultiTaskData } from './datasource';

function App (){
   const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    progress:'Progress',
    duration:'Duration',
    child: 'subtasks',
    expandState: 'isExpand'
  };
  
        return <GanttComponent dataSource={projectViewMultiTaskData} renableMultiTaskbar={true}
        taskFields={taskFields} height = '400px'>

        </GanttComponent>
    
};
ReactDOM.render(<App />, document.getElementById('root'));