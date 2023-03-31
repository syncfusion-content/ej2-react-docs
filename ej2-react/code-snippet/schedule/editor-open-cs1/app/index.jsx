
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Day, Week, WorkWeek, Month, ScheduleComponent, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let scheduleObj;
  const data = extend([], scheduleData, null, true);
  const eventSettings = { dataSource: data };
  function onClickButton1() {
    let cellData = {
      startTime: new Date(2018, 1, 15, 10, 0),
      endTime: new Date(2018, 1, 15, 11, 0),
    };
    scheduleObj.openEditor(cellData, 'Add');
  }
  function onClickButton2() {
    let eventData = {
      Id: 4,
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30)
    };
    scheduleObj.openEditor(eventData, 'Save');
  }
  return (<div>
    <ButtonComponent id='btn1' title='Click to open Editor' onClick={onClickButton1}>Click to open Editor</ButtonComponent>
    <ButtonComponent id='btn2' title='Click to open Event Editor' onClick={onClickButton2}>Click to open Event Editor</ButtonComponent>
    <ScheduleComponent ref={t => scheduleObj = t} height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
      <ViewsDirective>
        <ViewDirective option='Day' />
        <ViewDirective option='Week' />
        <ViewDirective option='WorkWeek' />
        <ViewDirective option='Month' />
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month]} />
    </ScheduleComponent>
  </div>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
