import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
function App() {
  const scheduleData = [{
    Id: 3,
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    StartTimezone: 'Europe/Moscow',
    EndTimezone: 'Europe/Moscow'
  }];
  const eventSettings = { dataSource: scheduleData };

  return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 11)} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
