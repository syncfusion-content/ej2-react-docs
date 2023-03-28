import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Week, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], scheduleData, null, true);
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} firstDayOfWeek={1}>
    <ViewsDirective>
      <ViewDirective option='Week'/>
      <ViewDirective option='Month'/>
    </ViewsDirective>
    <Inject services={[Week, Month]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
