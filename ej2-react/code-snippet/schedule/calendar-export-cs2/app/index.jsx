import * as ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, ICalendarExport, ICalendarImport, Resize, Inject } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { scheduleData } from './datasource';
/**
 *  Schedule header customization sample
 */
const App = () => {
  const scheduleObj = useRef(null);
  const eventSettings = { dataSource: scheduleData };
  const onClick = () => {
    scheduleObj.current.exportToICalendar('ScheduleEvents');
  }
  return (<div>
    <ButtonComponent id='ics-export' title='Export' onClick={onClick}>Export</ButtonComponent>
    <ScheduleComponent ref={scheduleObj} width='100%' height='520px' id='schedule' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, ICalendarExport, ICalendarImport, Resize, DragAndDrop]} />
    </ScheduleComponent></div>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);