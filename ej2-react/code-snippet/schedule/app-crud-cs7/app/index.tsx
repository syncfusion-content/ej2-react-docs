import React, { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DataManager, Query } from '@syncfusion/ej2-data';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const scheduleData: Object[] = [{
    Id: 3,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
  }, {
    Id: 4,
    Subject: 'Vacation',
    StartTime: new Date(2018, 1, 12, 11, 0),
    EndTime: new Date(2018, 1, 12, 12, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
  }];
  const eventSettings = { dataSource: scheduleData }

  const onClickAdd = (): void => {
    let Data: Object[] = [{
      Id: 1,
      Subject: 'Conference',
      StartTime: new Date(2018, 1, 15, 9, 0),
      EndTime: new Date(2018, 1, 15, 10, 0),
      IsAllDay: false,
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
    }];
    scheduleObj.current.addEvent(Data);
  }
  const onClickSave = (): void => {
    let data: Object = new DataManager(scheduleObj.current.getCurrentViewEvents()).executeLocal(new Query().where('RecurrenceID', 'equal', 3));
    data[0].Subject = 'Occurrence edited';
    scheduleObj.current.saveEvent(data[0], 'EditOccurrence');
  }
  const onClickDelete = (): void => {
    let Data: Object[] = [{
      Id: 4,
      Subject: 'Vacation',
      RecurrenceID: 4,
      StartTime: new Date(2018, 1, 12, 11, 0),
      EndTime: new Date(2018, 1, 12, 12, 0),
      IsAllDay: false,
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
    }];
    scheduleObj.current.deleteEvent(Data, 'DeleteSeries');
  }

  return (
    <div>
      <ButtonComponent id='add' title='Add' onClick=
        {onClickAdd}>Add</ButtonComponent>
      <ButtonComponent id='edit' title='Edit' onClick={onClickSave}>Edit</ButtonComponent>
      <ButtonComponent id='delete' title='Delete' onClick={onClickDelete}>Delete</ButtonComponent> <ScheduleComponent ref={scheduleObj} width='100%' height='550px' selectedDate=
        {new Date(2018, 1, 15)} eventSettings={eventSettings}>
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month]} />
      </ScheduleComponent>
    </div>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);