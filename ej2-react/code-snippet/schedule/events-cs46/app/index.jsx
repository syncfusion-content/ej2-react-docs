import { useRef } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
    const scheduleObj = useRef(null);
    const eventSettings = { dataSource: scheduleData }
    const onPopupOpen = (args) => {
        if (args.type == 'Editor') {
            scheduleObj.current.eventWindow.recurrenceEditor.frequencies = ['none', 'daily', 'weekly'];
        }
    }
    return (<ScheduleComponent ref={scheduleObj} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} popupOpen={onPopupOpen.bind(this)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
