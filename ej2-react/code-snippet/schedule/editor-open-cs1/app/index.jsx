import * as ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import { Day, Week, WorkWeek, Month, ScheduleComponent, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
const App = () => {
  const scheduleObj = useRef(null);
  const eventSettings = { dataSource: scheduleData };
  const eventButton = () => {
    let cellData = {
      startTime: new Date(2018, 1, 15, 10, 0),
      endTime: new Date(2018, 1, 15, 11, 0),
    };
    scheduleObj.current.openEditor(cellData, 'Add');
  }
  const eventEditorButton = () => {
    let eventData = {
      Id: 4,
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30)
    };
    scheduleObj.current.openEditor(eventData, 'Save');
  }
  return (<div>
    <ButtonComponent id='btn1' title='Click to open Editor' onClick={eventButton}>Click to open Editor</ButtonComponent>
    <ButtonComponent id='btn2' title='Click to open Event Editor' onClick={eventEditorButton}>Click to open Event Editor</ButtonComponent>
    <ScheduleComponent ref={scheduleObj} height='550px' selectedDate={new Date(2018, 1, 15)}
      eventSettings={eventSettings} >
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