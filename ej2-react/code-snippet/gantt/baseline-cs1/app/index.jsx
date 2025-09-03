import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';

function App (){
   const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    progress:'Progress',
    duration:'Duration',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate',
    baselineDuration: 'BaselineDuration',
    parentID: 'ParentID'
  };
  
    return <GanttComponent dataSource={GanttData} renderBaseline={true} baselineColor='red'
    taskFields={taskFields} height = '430px'>
    </GanttComponent>
    
};
ReactDOM.render(<App />, document.getElementById('root'));