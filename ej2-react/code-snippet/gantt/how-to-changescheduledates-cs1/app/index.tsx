import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { taskData } from './datasource';

function App() {
  let ganttInstance: GanttComponent | null = null;  // Type as GanttComponent or null initially
  
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentId'
  };

  // Button click handler to update the project dates
  function clickHandler() {
    if (ganttInstance) {
      ganttInstance.updateProjectDates(new Date('01/10/2019'), new Date('06/20/2019'), true);
    }
  }

  return (
    <div>
      <ButtonComponent onClick={clickHandler}>Update ScheduleDates</ButtonComponent>
      <GanttComponent
        dataSource={taskData}
        taskFields={taskFields}
        height='450px'
        ref={(gantt) => (ganttInstance = gantt)}  // Set ganttInstance to the GanttComponent instance
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
