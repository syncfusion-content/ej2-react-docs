{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, HeaderRowDirective, HeaderRowsDirective, TimelineViews, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 11, 31)}
    eventSettings={{ dataSource: data }} startHour='09:00' endHour='13:00'>
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
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


{% endraw %}