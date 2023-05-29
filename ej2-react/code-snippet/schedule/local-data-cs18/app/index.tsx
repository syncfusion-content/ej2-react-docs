import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject,
  PopupOpenEventArgs, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };

  const onPopupOpen = (args: PopupOpenEventArgs): void => {
    args.duration = 40;
  }
  return <ScheduleComponent width='100%' height='500px' selectedDate=
    {new Date(2018, 1, 15)} eventSettings={eventSettings}
    popupOpen={onPopupOpen}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



