import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';
const App = () => {
  const data = extend([], scheduleData, null, true);
  const eventSettings = { dataSource: data };

  return (<ScheduleComponent width='100%' height='500px' selectedDate={new Date(2018, 1, 15)} enableAdaptiveUI={true} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
