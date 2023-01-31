{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';
function App() {
    const data = extend([], scheduleData, null, true);
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} showHeaderBar={false} eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='Day'/>
      <ViewDirective option='Week'/>
      <ViewDirective option='WorkWeek'/>
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}