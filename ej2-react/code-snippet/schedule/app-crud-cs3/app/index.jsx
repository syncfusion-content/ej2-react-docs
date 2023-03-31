import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DataManager, Query } from '@syncfusion/ej2-data';
function App() {
  let scheduleObj;
  let buttonObj;
  const scheduleData = [{
    Id: 3,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
  }, {
    Id: 4,
    Subject: 'Vacation',
    StartTime: new Date(2018, 1, 13, 9, 0),
    EndTime: new Date(2018, 1, 13, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
  }];
  const eventSettings = { dataSource: scheduleData }

  function onEditClick() {
    let data = new DataManager(scheduleObj.getCurrentViewEvents()).executeLocal(new Query().where('RecurrenceID', 'equal', 3));
    data[0].Subject = 'Edited';
    scheduleObj.saveEvent(data[0], 'EditOccurrence');
    buttonObj.element.setAttribute('disabled', 'true');
  }
  return (<div>
    <ButtonComponent id='edit' ref={t => buttonObj = t} title='Edit' onClick={onEditClick.bind(this)}>Edit</ButtonComponent>
    <ScheduleComponent ref={t => scheduleObj = t} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
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