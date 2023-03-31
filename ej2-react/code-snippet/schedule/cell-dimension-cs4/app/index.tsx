


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings = { dataSource: data };

  return <ScheduleComponent width='100%' height='550px' currentView='Month'
    selectedDate={new Date(2018, 1, 17)} minDate={new Date(2017, 4, 17)}
    maxDate={new Date(2018, 5, 17)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
      <ViewDirective option='Agenda' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


