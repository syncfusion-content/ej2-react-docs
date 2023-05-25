import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, Month, PopupOpenEventArgs, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };

  const onPopupOpen = (args: PopupOpenEventArgs): void => {
    if (args.type === 'EventContainer') {
      args.cancel = true;
    }
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}
    currentView='Month'
    eventSettings={eventSettings} popupOpen={onPopupOpen} >
    <ViewsDirective>
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);

