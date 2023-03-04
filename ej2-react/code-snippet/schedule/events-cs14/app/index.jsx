import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], scheduleData, undefined, true);
    return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} allowDragAndDrop={false} eventSettings={{ dataSource: data }}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
