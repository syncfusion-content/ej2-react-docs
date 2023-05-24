import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventRenderedArgs, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const eventSettings: EventSettingsModel = { dataSource: scheduleData }

  const onEventRendered = (args: EventRenderedArgs): void => {
    if (args.data.EndTime < scheduleObj.current.selectedDate) {
      args.element.classList.add('e-past-app');
    }
  }

  return (
    <ScheduleComponent width='100%' height='550px' ref={scheduleObj} selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} eventRendered={onEventRendered}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);