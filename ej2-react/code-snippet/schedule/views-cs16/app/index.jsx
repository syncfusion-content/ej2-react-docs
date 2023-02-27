
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], appData, null, true);
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='TimelineDay' startHour='10:00' endHour='15:30'/>
    </ViewsDirective>
    <Inject services={[TimelineViews]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
