import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { projectViewMultiTaskData } from './datasource';

function App (){
   const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    progress:'Progress',
    duration:'Duration',
    parentID: 'ParentID',
    expandState: 'isExpand'
  };
  
        return <GanttComponent dataSource={projectViewMultiTaskData} enableMultiTaskbar={true}
        taskFields={taskFields} height = '400px'>
        </GanttComponent>
    
};
ReactDOM.render(<App />, document.getElementById('root'));