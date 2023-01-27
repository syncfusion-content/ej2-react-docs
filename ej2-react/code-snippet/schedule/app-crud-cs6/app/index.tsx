{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let scheduleObj: ScheduleComponent;
  const scheduleData: Object[] = [{
    Id: 3,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false
  }, {
    Id: 4,
    Subject: 'Vacation',
    StartTime: new Date(2018, 1, 13, 9, 0),
    EndTime: new Date(2018, 1, 13, 10, 0),
    IsAllDay: false
  }];
  function onClickAdd(): void {
    let Data: Object[] = [{
      Id: 1,
      Subject: 'Conference',
      StartTime: new Date(2018, 1, 12, 9, 0),
      EndTime: new Date(2018, 1, 12, 10, 0),
      IsAllDay: false
    }, {
      Id: 2,
      Subject: 'Meeting',
      StartTime: new Date(2018, 1, 15, 10, 0),
      EndTime: new Date(2018, 1, 15, 11, 30),
      IsAllDay: false
    }];
    scheduleObj.addEvent(Data);
  }
  function onClickSave(): void {
    let Data: Object = {
      Id: 3,
      Subject: 'Testing-edited',
      StartTime: new Date(2018, 1, 11, 10, 0),
      EndTime: new Date(2018, 1, 11, 11, 0),
      IsAllDay: false
    };
    scheduleObj.saveEvent(Data);
  }
  function onClickDelete(): void {
    scheduleObj.deleteEvent(4);
  }

  return (
    <div>
      <ButtonComponent id='add' title='Add' onClick={onClickAdd}>Add</ButtonComponent>
      <ButtonComponent id='edit' title='Edit' onClick={onClickSave}>Edit</ButtonComponent>
      <ButtonComponent id='delete' title='Delete' onClick={onClickDelete}>Delete</ButtonComponent> <ScheduleComponent ref={t => scheduleObj = t} width='100%' height='550px' selectedDate=
        {new Date(2018, 1, 15)} eventSettings={{ dataSource: scheduleData }}>
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



{% endraw %}