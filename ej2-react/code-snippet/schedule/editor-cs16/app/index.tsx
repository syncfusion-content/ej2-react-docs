import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { Day, Week, WorkWeek, Month, ScheduleComponent, ViewsDirective, ViewDirective, EventSettingsModel, Inject } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const onCellClickButton = () => {
    const cellData = {
      Subject: 'Review Meeting',
      StartTime: new Date(2023, 2, 5, 9, 0, 0),
      EndTime: new Date(2023, 2, 5, 10, 0, 0)
    };
    scheduleObj.current.openQuickInfoPopup(cellData, 'Add');
  };
  const onEventClickButton = () => {
    const eventData = {
      Id: 1,
      Subject: 'Review Meeting',
      StartTime: new Date(2023, 2, 5, 9, 0, 0),
      EndTime: new Date(2023, 2, 5, 10, 0, 0)
    };
    scheduleObj.current.openQuickInfoPopup(eventData, 'Save');
  };
  const data = [{
    Id: 1,
    Subject: 'Review Meeting',
    StartTime: new Date(2023, 2, 5, 9, 0, 0),
    EndTime: new Date(2023, 2, 5, 10, 0, 0)
  }];
  const eventSettings: EventSettingsModel = { dataSource: data };

  return (
    <div>
      <ButtonComponent id='btn1' onClick={onCellClickButton}>Show Cell Click Popup </ButtonComponent>
      <ButtonComponent id='btn2' onClick={onEventClickButton}>Show Event Click Popup </ButtonComponent>
      <ScheduleComponent
        width='100%'
        height='550px'
        selectedDate={new Date(2023, 2, 5)}
        ref={scheduleObj}
        currentView='Month'
        eventSettings={eventSettings}
      >
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