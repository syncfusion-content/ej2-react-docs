import React, { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Inject,
  ActionEventArgs, EventFieldsMapping, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };
  const onActionBegin = (args: ActionEventArgs): void => {
    if (args.requestType === 'eventCreate' && (args.data as any).length > 0) {
      let eventData: { [key: string]: Object } = args.data[0] as { [key: string]: Object };
      let eventField: EventFieldsMapping = scheduleObj.current.eventFields;
      let startDate: Date = eventData[eventField.startTime] as Date;
      let endDate: Date = eventData[eventField.endTime] as Date;
      args.cancel = !scheduleObj.current.isSlotAvailable(startDate, endDate);
    }
  }
  return <ScheduleComponent ref={scheduleObj} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} actionBegin={onActionBegin}>
    <Inject services={[Day, Week, WorkWeek]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);