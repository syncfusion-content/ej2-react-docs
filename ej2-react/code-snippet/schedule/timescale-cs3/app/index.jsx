
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Day, Week, WorkWeek, TimelineViews, ScheduleComponent, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';
function App() {
    const data = extend([], scheduleData, null, true);
    return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} timeScale={{ enable: false }}>
    <ViewsDirective>
      <ViewDirective option='Day'/>
      <ViewDirective option='Week'/>
      <ViewDirective option='TimelineWeek'/>
      <ViewDirective option='WorkWeek'/>
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, TimelineViews]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
