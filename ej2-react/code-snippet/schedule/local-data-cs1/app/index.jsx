import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
    const scheduleObj = useRef(null);
    const eventSettings = { dataSource: scheduleData };
    const onActionBegin = (args) => {
        if (args.requestType === 'eventCreate' && args.data.length > 0) {
            let eventData = args.data[0];
            let eventField = scheduleObj.current.eventFields;
            let startDate = eventData[eventField.startTime];
            let endDate = eventData[eventField.endTime];
            args.cancel = !scheduleObj.current.isSlotAvailable(startDate, endDate);
        }
    }
    return <ScheduleComponent ref={scheduleObj} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} actionBegin={onActionBegin}>
        <Inject services={[Day, Week, WorkWeek]} />
    </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
