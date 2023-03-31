import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, TimelineViews, Inject, TimelineMonth, Agenda,
  ViewsDirective, ViewDirective, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} rowAutoHeight={true}>
    <ViewsDirective>
      <ViewDirective option='TimelineDay' />
      <ViewDirective option='TimelineWeek' />
      <ViewDirective option='TimelineWorkWeek' />
      <ViewDirective option='TimelineMonth' />
      <ViewDirective option='Agenda' />
    </ViewsDirective>
    <Inject services={[TimelineViews, TimelineMonth, Agenda]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


