import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, TimelineViews, TimelineMonth, ViewsDirective, ViewDirective, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData, enableMaxHeight: true, enableIndicator: false }

  return (
    <ScheduleComponent width='100%' height='500px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
      <ViewsDirective>
        <ViewDirective option='TimelineWeek' />
        <ViewDirective option='TimelineMonth' />
      </ViewsDirective>
      <Inject services={[TimelineViews, TimelineMonth]} />
    </ScheduleComponent>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


