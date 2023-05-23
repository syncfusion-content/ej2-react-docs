import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, HeaderRowDirective, HeaderRowsDirective, TimelineMonth, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: scheduleData }

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 11, 31)} eventSettings={eventSettings}>
    <HeaderRowsDirective>
      <HeaderRowDirective option='Week' />
      <HeaderRowDirective option='Date' />
      <HeaderRowDirective option='Hour' />
    </HeaderRowsDirective>
    <ViewsDirective>
      <ViewDirective option='TimelineMonth' interval={24} />
      <ViewDirective option='TimelineWeek' interval={3} />
      <ViewDirective option='TimelineDay' interval={4} />
    </ViewsDirective>
    <Inject services={[TimelineMonth, TimelineViews]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
