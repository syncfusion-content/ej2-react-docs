import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Day, Week, WorkWeek, TimelineViews, ScheduleComponent, ViewsDirective, ViewDirective, Inject, EventSettingsModel, TimeScalesModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App  = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };
  const timeScale: TimeScalesModel = { enable: true, interval: 60, slotCount: 6 };
  return <ScheduleComponent width='100%' height='550px'
    selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}
    timeScale={timeScale}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='TimelineDay' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, TimelineViews]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



