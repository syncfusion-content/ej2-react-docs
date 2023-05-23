import * as React from 'react';
import * as ReactDOM from "react-dom";
import { useEffect } from 'react';
import {
  ScheduleComponent, Day, Week, Month, timezoneData, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };

  const timeZones: { [key: string]: Object }[] = [
    { Value: 'America/New_York', Text: '(UTC-05:00) Eastern Time' },
    { Value: 'UTC', Text: 'UTC' },
    { Value: 'Asia/Kolkata', Text: '(UTC+05:30) India Standard Time' }
  ];

  useEffect(() => {
    timezoneData.splice(0, timezoneData.length, timeZones as any);
  }, []);


  return (
    <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 1)} eventSettings={eventSettings} >
      <Inject services={[Day, Week, Month]} />
    </ScheduleComponent>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


