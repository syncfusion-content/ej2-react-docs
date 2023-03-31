import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Day, Week, WorkWeek, Month, ScheduleComponent, ViewsDirective, ViewDirective, EventSettingsModel, Inject } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
  let scheduleObj: ScheduleComponent;
  function onCellClickButton() {
    let cellData = {
      Subject: 'Review Meeting',
      StartTime: new Date(2023, 2, 5, 9, 0, 0),
      EndTime: new Date(2023, 2, 5, 10, 0, 0)
    };
    scheduleObj.openQuickInfoPopup(cellData, 'Add');
  }
  function onEventClickButton() {
    let eventData = {
      Id: 1,
      Subject: 'Review Meeting',
      StartTime: new Date(2023, 2, 5, 9, 0, 0),
      EndTime: new Date(2023, 2, 5, 10, 0, 0)
    };
    scheduleObj.openQuickInfoPopup(eventData, 'Save');
  }
  const data: object[] = [{
    Id: 1,
    Subject: 'Review Meeting',
    StartTime: new Date(2023, 2, 5, 9, 0, 0),
    EndTime: new Date(2023, 2, 5, 10, 0, 0)
  }];
  const eventSettings: EventSettingsModel = { dataSource: data };

  return (<div>
    <ButtonComponent id='btn1' onClick={onCellClickButton}>Show Cell Click Popup </ButtonComponent>
    <ButtonComponent id='btn2' onClick={onEventClickButton}>Show Event Click Popup </ButtonComponent>
    <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2023, 2, 5)}
      ref={schedule => scheduleObj = schedule} currentView='Month'
      eventSettings={eventSettings} >
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


