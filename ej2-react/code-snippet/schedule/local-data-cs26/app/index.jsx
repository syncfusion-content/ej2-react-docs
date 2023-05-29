import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: scheduleData };

  return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} enablePersistence={true}>
    <Inject services={[Day, Week, WorkWeek, Month]} />
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
