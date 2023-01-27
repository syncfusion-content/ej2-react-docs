{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { generateObject } from './datasource';
function App() {
    const data = generateObject();
    return <ScheduleComponent width='100%' height='500px' selectedDate={new Date(2021, 3, 28)} enableAllDayScroll={true} eventSettings={{
            dataSource: data
        }}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}