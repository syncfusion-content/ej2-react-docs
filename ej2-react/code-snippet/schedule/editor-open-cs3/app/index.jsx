
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Day, Week, WorkWeek, Month, ScheduleComponent, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let scheduleObj;
  const data = extend([], scheduleData, undefined, true);
  const eventSettings = { dataSource: data };

  function onClick() {
    if (scheduleObj) {
      let dates = [new Date(2018, 1, 15), new Date(2018, 1, 17)];
      scheduleObj.setWorkHours(dates, '11:00', '20:00');
    }
  }

  return (
    <div>
      <ButtonComponent title='Set work hours' onClick={onClick}>Click to set work hours</ButtonComponent>
      <ScheduleComponent ref={t => scheduleObj = t} height='550px' selectedDate={new Date(2018, 1, 15)}
        workHours={{ highlight: true, start: '09:00', end: '11:00' }}
        eventSettings={eventSettings}>
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month]} />
      </ScheduleComponent>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
