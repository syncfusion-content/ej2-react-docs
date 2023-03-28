import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, TimelineViews, TimelineMonth, Month, Agenda, DragAndDrop, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    let data = extend([], scheduleData, null, true);
    return (<ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }}>
      <ViewsDirective>
        <ViewDirective option='TimelineDay'/>
        <ViewDirective option='Day'/>
        <ViewDirective option='Week'/>
        <ViewDirective option='TimelineMonth'/>
        <ViewDirective option='Month'/>
        <ViewDirective option='Agenda'/>
      </ViewsDirective>
      <Inject services={[Day, Week, TimelineViews, TimelineMonth, Month, Agenda, DragAndDrop]}/>
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
