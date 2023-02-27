
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Month, Week, WorkWeek, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], scheduleData, null, true);
    return (<ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} firstDayOfWeek={3} eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='Week'/>
      <ViewDirective option='WorkWeek'/>
      <ViewDirective option='Month'/>
    </ViewsDirective>
    <Inject services={[Week, WorkWeek, Month]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
