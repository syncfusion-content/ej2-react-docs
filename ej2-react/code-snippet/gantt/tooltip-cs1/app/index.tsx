export let data: Object[] = [
  {
      TaskID: 1,
      TaskName: 'Project Initiation',
      StartDate: new Date('04/02/2019'),
      EndDate: new Date('04/21/2019'),
      subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location',BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/02/2019'), StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/09/2019'), Duration: 4, Progress: 50  },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/08/2019'),BaselineEndDate: new Date('04/12/2019'), Duration: 4,Predecessor:"2FS", Progress: 50 },
      ]
  },
  {
      TaskID: 5,
      TaskName: 'Project Estimation',
      StartDate: new Date('04/02/2019'),
      EndDate: new Date('04/21/2019'),
      subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation',BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/08/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/08/2019'), Duration: 0,Predecessor:"6SS", Progress: 50 }
      ]
  },
];

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, DayMarkers, EventMarkersDirective, EventMarkerDirective } from '@syncfusion/ej2-react-gantt';

function App (){
  const  taskFields: any = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  dependency: 'Predecessor',
  baselineStartDate: 'BaselineStartDate',
  baselineEndDate: 'BaselineEndDate',
  child: 'subtasks'
};
 const  tooltipSettings: any = {
    showTooltip: true
  };
  let eventMarkerDay1: Date = new Date('04/10/2019');
        return <GanttComponent dataSource={data} taskFields={taskFields}
           tooltipSettings={tooltipSettings} renderBaseline={true} baselineColor="Red" height = '450px'>
            <EventMarkersDirective>
                <EventMarkerDirective day={eventMarkerDay1} label='Project kick-off' >
                </EventMarkerDirective>
              </EventMarkersDirective>
            <Inject services={[DayMarkers]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));