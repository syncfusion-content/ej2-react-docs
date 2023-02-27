
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    function onResizeStart(args) {
        args.scroll = { enable: true, scrollBy: 15 };
    }
    const data = extend([], scheduleData, null, true);
    return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} resizeStart={onResizeStart}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
