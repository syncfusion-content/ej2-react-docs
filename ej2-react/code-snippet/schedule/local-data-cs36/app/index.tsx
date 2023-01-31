{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject,
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let data: Object[] = extend([], scheduleData, null, true) as Object[];

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2020, 1, 15)} eventSettings={{ dataSource: data }} showWeekNumber={true}
    workDays={[1, 3, 4, 5]} weekRule='FirstFourDayWeek'>
    <Inject services={[Day, Week, Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


{% endraw %}