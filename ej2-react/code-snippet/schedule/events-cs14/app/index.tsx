import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

const App = () => {
  const data: Object[] = extend([], scheduleData, undefined, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data }

  return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} allowDragAndDrop={false} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



