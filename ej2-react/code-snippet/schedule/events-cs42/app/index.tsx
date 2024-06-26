import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, TimelineViews, TimelineMonth, Month, Agenda, Resize, ViewsDirective, ViewDirective, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData }

  return (
    <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
      <ViewsDirective>
        <ViewDirective option='Day' />
        <ViewDirective option='TimelineWeek' />
        <ViewDirective option='Week' />
        <ViewDirective option='TimelineMonth' />
        <ViewDirective option='Month' />
        <ViewDirective option='Agenda' />
      </ViewsDirective>
      <Inject services={[Day, Week, TimelineViews, TimelineMonth, Month, Agenda, Resize]} />
    </ScheduleComponent>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



