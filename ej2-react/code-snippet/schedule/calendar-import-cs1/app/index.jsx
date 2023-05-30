import * as ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, Inject, ICalendarExport, ICalendarImport
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

const App = () => {
  const scheduleObj = useRef(null);
  let multiple = false;
  let showFileList = false;
  const allowedExtensions = '.ics';
  const eventSettings = { dataSource: scheduleData };

  const onSelect = (args) => {
    scheduleObj.current.importICalendar(args.event.target.files[0]);
  }
  return (<div>
    <UploaderComponent id='fileUpload' type='file' allowedExtensions={allowedExtensions} cssClass='calendar-import'
      buttons={{ browse: 'Choose file' }} multiple={multiple} showFileList={showFileList}
      selected={onSelect}></UploaderComponent>
    <ScheduleComponent ref={scheduleObj} width='100%' height='520px' selectedDate={new Date(2018, 1, 15)} allowDragAndDrop={false} eventSettings={eventSettings}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, ICalendarExport, ICalendarImport, Resize, DragAndDrop]} />
    </ScheduleComponent></div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);