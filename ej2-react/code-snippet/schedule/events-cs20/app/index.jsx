import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
  let scheduleObj;
  function onDragStop(args) {
    args.cancel = true; //cancels the drop action
    scheduleObj.openEditor(args.data, "Save"); //open the event window with updated start and end time
  }
  const data = extend([], scheduleData, null, true);
  const eventSettings = { dataSource: data }

  return <ScheduleComponent height='550px' ref={schedule => scheduleObj = schedule} selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} dragStop={(onDragStop)}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
