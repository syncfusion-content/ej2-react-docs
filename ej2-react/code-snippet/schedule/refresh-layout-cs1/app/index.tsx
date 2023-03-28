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
    Id: 1,
    Subject: 'Testing',
    StartTime: new Date(2021, 10, 16, 10, 0),
    EndTime: new Date(2021, 10, 16, 12, 0),
    IsAllDay: false
  }, {
    Id: 2,
    Subject: 'Vacation',
    StartTime: new Date(2021, 10, 18, 10, 0),
    EndTime: new Date(2021, 10, 18, 12, 0),
    IsAllDay: false
  }];
  function onRefreshLayout(): void {
    scheduleObj.refreshLayout();
  }

  return (<div>
    <ButtonComponent onClick={onRefreshLayout}>Refresh Layout</ButtonComponent> <ScheduleComponent ref={t => scheduleObj = t} width='100%' height='550px' selectedDate=
      {new Date(2021, 10, 15)} eventSettings={{ dataSource: scheduleData }}>
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



