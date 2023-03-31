import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    let data = extend([], scheduleData, null, true);
    const fields = {
        subject: { name: 'Subject', validation: { required: true } },
        location: {
            name: 'Location', validation: {
                required: true,
                regex: ["^[a-zA-Z0-9- ]*$", 'Special character(s) not allowed in this field']
            }
        }
    };
    const eventSettings = { dataSource: data, fields: fields }

    return (<ScheduleComponent height='550px' width='100%' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
