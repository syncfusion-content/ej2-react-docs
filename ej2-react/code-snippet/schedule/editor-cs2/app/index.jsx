
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';
function App() {
    let scheduleObj;
    const data = extend([], scheduleData, null, true);
    function onPopupOpen(args) {
        if (args.type === 'Editor') {
            args.duration = 60;
        }
    }
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} ref={schedule => scheduleObj = schedule} eventSettings={{ dataSource: data }} popupOpen={onPopupOpen}>
    <ViewsDirective>
      <ViewDirective option='Day'/>
      <ViewDirective option='Week'/>
      <ViewDirective option='WorkWeek'/>
      <ViewDirective option='Month'/>
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
