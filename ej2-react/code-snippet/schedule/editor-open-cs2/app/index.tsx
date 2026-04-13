import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import {
  Day, Week, WorkWeek, Month, ScheduleComponent, ViewsDirective, ViewDirective, CellClickEventArgs, EventSettingsModel, EventClickArgs, Inject
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };
  const onCellClick = (args: CellClickEventArgs): void => {
    scheduleObj.current.openEditor(args, 'Add');
  }
  const onEventClick = (args: EventClickArgs): void => {
    if (!(args.event as any).RecurrenceRule) {
      scheduleObj.current.openEditor(args.event, 'Save');
    }
    else {
      scheduleObj.current.quickPopup.openRecurrenceAlert();
    }
  }

  return (<div>
    <ScheduleComponent ref={scheduleObj} height='550px' selectedDate={new Date(2021, 7, 15)}
      eventSettings={eventSettings} showQuickInfo={false} eventClick={onEventClick}
      cellClick={onCellClick} >
      <ViewsDirective>
        <ViewDirective option='Day' />
        <ViewDirective option='Week' />
        <ViewDirective option='WorkWeek' />
        <ViewDirective option='Month' />
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month]} />
    </ScheduleComponent>
  </div>)

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);