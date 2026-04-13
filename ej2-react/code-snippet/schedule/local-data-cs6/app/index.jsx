import { useRef } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager } from '@syncfusion/ej2-data';
const App = () => {
    const scheduleRef = useRef(null);
    const dataManager = useRef(new DataManager({
        url: 'http://some.com/invalidUrl'
    }));
    const eventSettings = { dataSource: dataManager.current };

    const onActionFailure = () => {
        const span = document.createElement('span');
        scheduleRef.current?.element.parentNode?.insertBefore(span, scheduleRef.current?.element);
        if (span.style) {
            span.style.color = '#FF0000';
        }
        span.innerHTML = 'Server exception: 404 Not found';
    };

    return (
        <ScheduleComponent height='550px' ref={scheduleRef} selectedDate={new Date(2017, 5, 11)} actionFailure={onActionFailure} eventSettings={eventSettings} >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);