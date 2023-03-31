import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { readOnlyData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
  const data = extend([], readOnlyData, null, true);
  const eventSettings = { dataSource: data }

  return (<ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
