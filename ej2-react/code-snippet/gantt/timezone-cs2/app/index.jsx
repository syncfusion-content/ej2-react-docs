import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, Edit } from '@syncfusion/ej2-react-gantt';

function App(){
   const timezoneData= [
     {
       taskID: 1,
       taskName: 'Project Schedule',
       startDate: new Date('02/04/2019 08:00'),
       endDate: new Date('03/10/2019')
      },
      {
       taskID: 2,
       taskName: 'Planning',
       startDate: new Date('02/04/2019 08:00'),
       endDate: new Date('02/10/2019'),
       parentID: 1
      },
     {
       taskID: 3,
       taskName: 'Plan timeline',
       startDate: new Date('02/04/2019 08:00'),
       endDate: new Date('02/10/2019'),
       duration: 6,
       progress: '60',
       parentID: 2
     },
     {
       taskID: 4,
       taskName: 'Plan budget',
       startDate: new Date('02/04/2019 08:00'),
       endDate: new Date('02/10/2019'),
       duration: 6,
       progress: '90',
       parentID: 2
     },
     {
       taskID: 5,
       taskName: 'Allocate resources',
       startDate: new Date('02/04/2019 08:00'),
       endDate: new Date('02/10/2019'),
       duration: 6,
       progress: '75',
       parentID: 2
     },
     {
       taskID: 6,
       taskName: 'Planning complete',
       startDate: new Date('02/06/2019 08:00'),
       endDate: new Date('02/10/2019'),
       duration: 0,
       predecessor: '3FS,4FS,5FS',
       parentID: 2
     },
    {
      taskID: 7,
      taskName: 'Design',
      startDate: new Date('02/13/2019 08:00'),
      endDate: new Date('02/17/2019 08:00'),
      parentID: 1
    },
    {
      taskID: 8,
      taskName: 'Software Specification',
      startDate: new Date('02/13/2019 08:00'),
      endDate: new Date('02/15/2019'),
      duration: 3,
      progress: '60',
      predecessor: '6FS',
      parentID: 7
    },
    {
      taskID: 9,
      taskName: 'Develop prototype',
      startDate: new Date('02/13/2019 08:00'),
      endDate: new Date('02/15/2019'),
      duration: 3,
      progress: '100',
      predecessor: '6FS',
      parentID: 7
    },
    {
      taskID: 10,
      taskName: 'Get approval from customer',
      startDate: new Date('02/16/2019 08:00'),
      endDate: new Date('02/17/2019 08:00'),
      duration: 2,
      progress: '100',
      predecessor: '9FS',
      parentID: 7
    },
    {
      taskID: 11,
      taskName: 'Design complete',
      startDate: new Date('02/17/2019 08:00'),
      endDate: new Date('02/17/2019 08:00'),
      duration: 0,
      predecessor: '10FS',
      parentID: 7
    }];
  const taskFields = {
    id: 'taskID',
    name: 'taskName',
    startDate: 'startDate',
    duration: 'duration',
    progress: 'progress',
    dependency: 'predecessor',
    parentID: 'parentID'
    };
  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
    };
  const timelineSettings= {
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
  function actionComplete(args) {
    if(args.action == "TaskbarEditing") {
      console.log(args.data.ganttProperties.endDate);
    }
  }
  let dayWorkingTime = [{ from: 0, to: 24 }];
        return <GanttComponent dataSource={timezoneData} taskFields={taskFields} editSettings={editSettings} allowSelection={true} durationUnit='Hour' actionComplete={actionComplete}  height = '450px' includeWeekend={true} dayWorkingTime={dayWorkingTime} timelineSettings={timelineSettings} >
            <Inject services={[Edit, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));