



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Inject,
  ActionEventArgs, EventFieldsMapping
} from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

function App() {
  let scheduleObj: ScheduleComponent;
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  function onActionBegin(args: ActionEventArgs): void {
    if (args.requestType === 'eventCreate' && (args.data as Object).length > 0) {
      let eventData: { [key: string]: Object } = args.data[0] as { [key: string]: Object };
      let eventField: EventFieldsMapping = scheduleObj.eventFields;
      let startDate: Date = eventData[eventField.startTime] as Date;
      let endDate: Date = eventData[eventField.endTime] as Date;
      args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
    }
  }

  return (
    <ScheduleComponent ref={schedule => scheduleObj = schedule} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} actionBegin={onActionBegin}>
      <Inject services={[Day, Week, WorkWeek]} />
    </ScheduleComponent>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



