



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';

function App() {
  const data: object[] = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2023, 1, 15, 10, 0),
    EndTime: new Date(2023, 1, 15, 12, 30),
  }];
  const eventSettings: EventSettingsModel = { dataSource: data }

  return <ScheduleComponent height='550px' selectedDate={new Date(2023, 1, 15)} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
