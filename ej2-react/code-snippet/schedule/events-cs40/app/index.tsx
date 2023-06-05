import { useRef } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ActionEventArgs, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const eventSettings: EventSettingsModel = { dataSource: scheduleData }
  const onActionBegin = (args: ActionEventArgs): void => {
    if (args.requestType === 'eventChange') {
      let weekEnds: number[] = [0, 6];
      let weekDay: boolean = weekEnds.indexOf(((args.data as any).StartTime).getDay()) >= 0;
      let workHours: boolean = ((args.data as any).StartTime.getHours < parseInt(scheduleObj.current.workHours.start)) || ((args.data as any).StartTime.getHours > parseInt(scheduleObj.current.workHours.end));
      if (weekDay || workHours) {
        args.cancel = true;
      }
    }
  }
  return (
    <ScheduleComponent height='550px' width='100%' selectedDate={new Date(2018, 1, 15)} ref={scheduleObj} eventSettings={eventSettings} actionBegin={onActionBegin.bind(this)}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);