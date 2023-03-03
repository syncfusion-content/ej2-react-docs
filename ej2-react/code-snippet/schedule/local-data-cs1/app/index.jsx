import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';
function App() {
    let scheduleObj;
    const data = extend([], scheduleData, null, true);
    function onActionBegin(args) {
        if (args.requestType === 'eventCreate' && args.data.length > 0) {
            let eventData = args.data[0];
            let eventField = scheduleObj.eventFields;
            let startDate = eventData[eventField.startTime];
            let endDate = eventData[eventField.endTime];
            args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
        }
    }
    return <ScheduleComponent ref={schedule => scheduleObj = schedule} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} actionBegin={onActionBegin}>
    <Inject services={[Day, Week, WorkWeek]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
