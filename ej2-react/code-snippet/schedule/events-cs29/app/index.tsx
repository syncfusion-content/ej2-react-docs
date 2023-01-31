{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventRenderedArgs
} from '@syncfusion/ej2-react-schedule';

function App() {
  let scheduleObj: ScheduleComponent;
  const data: Object[] = [{
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    StartTime: new Date(2018, 1, 16, 10, 30),
    EndTime: new Date(2018, 1, 16, 10, 40)
  }, {
    Id: 14,
    Subject: 'Aliens vs Humans',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 10, 20)
  }];

  function onEventRendered(args: EventRenderedArgs): void {
    let cellHeight: number = (scheduleObj.element.querySelector('.e-work-cells') as HTMLElement).offsetHeight;
    let appHeight: number = ((args.data.EndTime as Date).getTime() - (args.data.StartTime as Date).getTime()) / (60 * 1000) * (cellHeight * scheduleObj.timeScale.slotCount) / scheduleObj.timeScale.interval;
    args.element.style.height = appHeight + 'px';
  }

  return (
    <ScheduleComponent width='100%' height='550px' ref={schedule => scheduleObj = schedule} selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} eventRendered={onEventRendered}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


{% endraw %}