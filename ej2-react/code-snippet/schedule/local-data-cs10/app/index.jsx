{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';
function App() {
    const data = extend([], scheduleData, null, true);
    const minValidation = (args) => {
        return args['value'].length >= 5;
    };
    return (<ScheduleComponent width='100%' height='500px' selectedDate={new Date(2018, 1, 15)} eventSettings={{
            dataSource: data,
            fields: {
                id: 'Id',
                subject: { name: 'Subject', validation: { required: true } },
                location: { name: 'Location', validation: { required: true } },
                description: {
                    name: 'Description', validation: {
                        required: true, minLength: [minValidation, 'Need atleast 5 letters to be entered']
                    }
                },
                startTime: { name: 'StartTime', validation: { required: true } },
                endTime: { name: 'EndTime', validation: { required: true } }
            }
        }}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}