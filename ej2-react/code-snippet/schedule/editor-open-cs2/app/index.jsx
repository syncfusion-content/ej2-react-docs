import * as ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import { Day, Week, WorkWeek, Month, ScheduleComponent, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const scheduleObj = useRef(null);
  const eventSettings = { dataSource: scheduleData };
  const onCellClick = (args) => {
    scheduleObj.current.openEditor(args, 'Add');
  }
  const onEventClick = (args) => {
    if (!(args.event.RecurrenceRule)) {
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