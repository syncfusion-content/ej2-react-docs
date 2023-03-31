import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Day, Week, WorkWeek, TimelineViews, ScheduleComponent, ViewsDirective, ViewDirective, Inject, EventSettingsModel, TimeScalesModel
} from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };
  const timeScale: TimeScalesModel = { enable: true, interval: 60, slotCount: 6 };

  let scheduleObj: ScheduleComponent;
  return <ScheduleComponent width='100%' height='550px' ref={schedule => scheduleObj = schedule}
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



