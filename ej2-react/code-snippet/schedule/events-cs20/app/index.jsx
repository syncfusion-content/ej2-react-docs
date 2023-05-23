import {useRef} from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const scheduleObj = useRef(null);
  function onDragStop(args) {
    args.cancel = true; //cancels the drop action
    scheduleObj.openEditor(args.data, "Save"); //open the event window with updated start and end time
  }
  const eventSettings = { dataSource: scheduleData }

  return <ScheduleComponent height='550px' ref={scheduleObj} selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} dragStop={(onDragStop)}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
