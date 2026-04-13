import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, HeaderRowDirective, HeaderRowsDirective, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: scheduleData }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 11, 31)} eventSettings={eventSettings} startHour='09:00' endHour='13:00'>
    <HeaderRowsDirective>
      <HeaderRowDirective option='Year' />
      <HeaderRowDirective option='Month' />
      <HeaderRowDirective option='Week' />
      <HeaderRowDirective option='Date' />
      <HeaderRowDirective option='Hour' />
    </HeaderRowsDirective>
    <ViewsDirective>
      <ViewDirective option='TimelineWeek' />
    </ViewsDirective>
    <Inject services={[TimelineViews]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
