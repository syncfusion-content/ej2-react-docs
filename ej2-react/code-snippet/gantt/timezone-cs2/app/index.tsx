import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, Edit } from '@syncfusion/ej2-react-gantt';
import { timezoneData } from './datasource';

function App(){
  const taskFields: any = {
    id: 'taskID',
    name: 'taskName',
    startDate: 'startDate',
    duration: 'duration',
    progress: 'progress',
    dependency: 'predecessor',
    parentID: 'parentId'
  };
  const editSettings: any = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  const timelineSettings: any = {
    timelineUnitSize: 65,
    topTier: {
      unit: 'Day',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Hour',
      format: 'hh:mm a'
    }
  };
  function actionComplete(args: any) {
    if(args.action == "TaskbarEditing") {
      console.log(args.data.ganttProperties.endDate);
    }
  }
  let dayWorkingTime: any = [{ from: 0, to: 24 }];
  return (
    <GanttComponent 
      dataSource={timezoneData} 
      taskFields={taskFields} 
      editSettings={editSettings} 
      allowSelection={true} 
      durationUnit='Hour' 
      actionComplete={actionComplete}  
      height = '450px' 
      includeWeekend={true} 
      dayWorkingTime={dayWorkingTime} 
      timelineSettings={timelineSettings} 
    >
      <Inject services={[Edit, Selection]} />
    </GanttComponent>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));