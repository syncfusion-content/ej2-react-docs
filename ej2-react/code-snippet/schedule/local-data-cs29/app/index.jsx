import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
  let data = extend([], scheduleData, null, true);
  const eventSettings = { dataSource: scheduleData };

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 17)} eventSettings={eventSettings} timezone='America/New_York'>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
