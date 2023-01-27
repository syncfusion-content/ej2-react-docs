{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, ResizeEventArgs, Inject
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  function onResizeStart(args: ResizeEventArgs): void {
    args.interval = 10;
  }
  const data: Object[] = extend([], scheduleData, null, true) as Object[];

  return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} resizeStart={(onResizeStart)}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize]} />
  </ScheduleComponent>

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



{% endraw %}