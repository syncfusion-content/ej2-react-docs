import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2020, 1, 15)} eventSettings={eventSettings} showWeekNumber={true}
    workDays={[1, 3, 4, 5]} weekRule='FirstFourDayWeek'>
    <Inject services={[Day, Week, Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


