import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, WorkWeek, Week, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { defaultData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], defaultData, null, true);
    const eventSettings = { dataSource: data }

    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
      <ViewsDirective>
        <ViewDirective option='WorkWeek' startHour='10:00' endHour='18:00'/>
        <ViewDirective option='Week' startHour='07:00' endHour='15:00'/>
        <ViewDirective option='Month' showWeekend={false}/>
      </ViewsDirective>
      <Inject services={[WorkWeek, Week, Month]}/>
    </ScheduleComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
