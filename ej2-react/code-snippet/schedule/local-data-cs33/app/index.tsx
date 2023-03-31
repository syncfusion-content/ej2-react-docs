import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Week, WorkWeek, TimelineViews, Inject,
  ViewsDirective, ViewDirective, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };
  const workingDays: number[] = [1, 3, 5];
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} workDays={workingDays} >
    <ViewsDirective>
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='TimelineWorkWeek' />
    </ViewsDirective>
    <Inject services={[Week, WorkWeek, TimelineViews]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


