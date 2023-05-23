import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: appData };
  const timeScale = { enable: true, slotCount: 5 };


  return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Day' startHour='09:30' endHour='18:00' timeScale={timeScale} />
    </ViewsDirective>
    <Inject services={[Day]} />
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
