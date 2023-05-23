import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
function App() {
  function onResizeStart(args) {
    args.scroll = { enable: true, scrollBy: 15 };
  }
  const eventSettings = { dataSource: scheduleData }

  return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} resizeStart={onResizeStart}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize]} />
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
