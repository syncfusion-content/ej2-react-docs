{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject,
  EventRenderedArgs
} from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

function App() {
  let data: Object[] = extend([], scheduleData, null, true) as Object[];
  function onEventRendered(args: EventRenderedArgs): void {
    if (args.data.StartTime.getDate() === 11 || args.data.StartTime.getDate() === 15) {
      (args.element as HTMLElement).style.backgroundColor = args.data.CategoryColor;
    }
  }
  return <ScheduleComponent width='100%' height='500px' selectedDate=
    {new Date(2018, 1, 15)} eventSettings={{ dataSource: data }}
    eventRendered={onEventRendered}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



{% endraw %}