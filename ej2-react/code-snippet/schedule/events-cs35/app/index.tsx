import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventRenderedArgs
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let scheduleObj: ScheduleComponent;
  let data: Object[] = extend([], scheduleData, null, true) as Object[];
  function onEventRendered(args: EventRenderedArgs): void {
    if (args.data.EndTime < scheduleObj.selectedDate) {
      args.element.classList.add('e-past-app');
    }
  }

  return (
    <ScheduleComponent width='100%' height='550px' ref={schedule => scheduleObj = schedule} selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} eventRendered={onEventRendered}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


