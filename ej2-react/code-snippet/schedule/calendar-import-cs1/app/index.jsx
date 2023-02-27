import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, Inject, ICalendarExport, ICalendarImport } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    let scheduleObj;
    let multiple = false;
    let showFileList = false;
    const allowedExtensions = '.ics';
    const data = extend([], scheduleData, null, true);
    function onSelect(args) {
        scheduleObj.importICalendar(args.event.target.files[0]);
    }
    return (<div>
    <UploaderComponent id='fileUpload' type='file' allowedExtensions={allowedExtensions} cssClass='calendar-import' buttons={{ browse: 'Choose file' }} multiple={multiple} showFileList={showFileList} selected={onSelect}></UploaderComponent>
    <ScheduleComponent ref={schedule => scheduleObj = schedule} width='100%' height='520px' selectedDate={new Date(2018, 1, 15)} allowDragAndDrop={false} eventSettings={{ dataSource: data }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, ICalendarExport, ICalendarImport, Resize, DragAndDrop]}/>
    </ScheduleComponent></div>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);