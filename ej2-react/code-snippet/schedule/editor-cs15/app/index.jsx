import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Day, Week, WorkWeek, Month, ScheduleComponent, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
  let scheduleObj;
  function ClickButton() {
    scheduleObj.closeEditor();
  }
  const data = [{
    Id: 1,
    Subject: 'Review Meeting',
    StartTime: new Date(2023, 2, 5, 9, 0, 0),
    EndTime: new Date(2023, 2, 5, 10, 0, 0)
  }];
  const eventSettings = { dataSource: data };

  return (<div>
    <ButtonComponent onClick={ClickButton}>Close Editor Window </ButtonComponent>
    <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2023, 2, 5)} ref={schedule => scheduleObj = schedule} currentView='Month' eventSettings={eventSettings}>
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
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
