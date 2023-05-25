import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { generateObject } from './datasource';

const App = () => {
  const data: Object[] = generateObject() as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };

  return <ScheduleComponent width='100%' height='500px' selectedDate={new Date(2021, 3, 28)} enableAllDayScroll={true} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



