import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Inject,
  ViewsDirective, ViewDirective, EventSettingsModel, WorkHoursModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };
  const workHours: WorkHoursModel = {
    highlight: true, start: '11:00', end: '20:00'
  };

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} workHours={workHours} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


