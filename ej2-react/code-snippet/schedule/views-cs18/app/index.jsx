{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, TimelineViews, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], appData, null, true);
    const workDays = [2, 3, 5];
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='TimelineWorkWeek' interval={3} workDays={workDays} dateFormat='dd-MMM-yyyy'/>
      <ViewDirective option='Agenda'/>
    </ViewsDirective>
    <Inject services={[TimelineViews, Agenda]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}