
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, TimelineViews, TimelineMonth, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], scheduleData, null, true);
    return (<ScheduleComponent width='100%' height='500px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data, enableMaxHeight: true, enableIndicator: false }}>
      <ViewsDirective>
        <ViewDirective option='TimelineWeek'/>
        <ViewDirective option='TimelineMonth'/>
      </ViewsDirective>
      <Inject services={[TimelineViews, TimelineMonth]}/>
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
