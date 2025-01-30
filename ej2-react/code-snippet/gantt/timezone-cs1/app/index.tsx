import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject,Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { timezoneData } from './datasource';

function App(){
  const taskFields: any = {
    id: 'taskID',
    name: 'taskName',
    startDate: 'startDate',
    duration: 'duration',
    progress: 'progress',
    dependency: 'predecessor',
    parentID: 'parentID'
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
  let  dayWorkingTime: any = [{ from: 0, to: 24 }];
  return (
    <GanttComponent 
      dataSource={timezoneData} 
      taskFields={taskFields}
      timelineSettings={timelineSettings} 
      allowSelection={true}
      timezone='UTC' 
      height='450px' 
      dateFormat='hh:mm a'
      dayWorkingTime={dayWorkingTime} 
      durationUnit='Hour' 
      includeWeekend={true}
    >
      <Inject services={[Edit, Selection]} />
    </GanttComponent>
  ); 
};
ReactDOM.render(<App />, document.getElementById('root'));