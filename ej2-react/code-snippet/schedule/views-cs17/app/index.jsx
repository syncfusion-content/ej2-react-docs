import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: appData };

  return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='TimelineWeek' timeScale={{ enable: false }} />
    </ViewsDirective>
    <Inject services={[TimelineViews]} />
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
