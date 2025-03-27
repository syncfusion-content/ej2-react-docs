import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, Inject } from '@syncfusion/ej2-react-schedule';
const App = () => {
  const eventsData = [
    {
      Id: 1,
      Subject: "Annual Conference",
      StartTime: new Date(2025, 2, 2, 10, 0, 0),
      EndTime: new Date(2025, 2, 2, 11, 0, 0)
  },
  {
      Id: 2,
      Subject: "Tech Symposium",
      StartTime: new Date(2025, 2, 2, 10, 30, 0),
      EndTime: new Date(2025, 2, 2, 11, 30, 0)
  },
  {
      Id: 3,
      Subject: "Client Meeting",
      StartTime: new Date(2025, 2, 3, 12, 0, 0),
      EndTime: new Date(2025, 2, 3, 14, 0, 0),
      RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=5"
  },
  {
      Id: 4,
      Subject: "Project Review",
      StartTime: new Date(2025, 2, 4, 11, 0, 0),
      EndTime: new Date(2025, 2, 4, 14, 0, 0)
  },
  {
      Id: 5,
      Subject: "Strategy Session",
      StartTime: new Date(2025, 2, 6, 9, 30, 0),
      EndTime: new Date(2025, 2, 6, 10, 0, 0)
  },
  {
      Id: 6,
      Subject: "Board Meeting",
      StartTime: new Date(2025, 2, 6, 9, 30, 0),
      EndTime: new Date(2025, 2, 6, 11, 0, 0)
  }
];
  const eventSettings = { dataSource: eventsData }

  return <ScheduleComponent height='550px' selectedDate={new Date(2025, 2, 6)} allowOverlap={false} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
