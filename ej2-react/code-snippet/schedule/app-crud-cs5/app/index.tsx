import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const buttonObj = useRef<ButtonComponent>(null);
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
  const eventSettings = { dataSource: scheduleData }

  const onDeleteClick = (): void => {
    scheduleObj.current.deleteEvent(4);
    buttonObj.current.element.setAttribute('disabled', 'true');
  }

  return (
    <div>
      <ButtonComponent id='delete' ref={buttonObj} title='Delete' onClick={onDeleteClick}>Delete</ButtonComponent>
      <ScheduleComponent ref={scheduleObj} width='100%' height='550px' selectedDate=
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