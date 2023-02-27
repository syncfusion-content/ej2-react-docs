



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, TimelineViews, TimelineMonth, Month, Agenda, Resize, ViewsDirective, ViewDirective, Inject
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='TimelineWeek' />
      <ViewDirective option='Week' />
      <ViewDirective option='TimelineMonth' />
      <ViewDirective option='Month' />
      <ViewDirective option='Agenda' />
    </ViewsDirective>
    <Inject services={[Day, Week, TimelineViews, TimelineMonth, Month, Agenda, Resize]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



