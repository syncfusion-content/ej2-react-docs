import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    let data = extend([], scheduleData, null, true);
    const eventSettings = { dataSource: data }

    let scheduleObj;
    function onActionBegin(args) {
        if (args.requestType == 'eventChange') {
            let weekEnds = [0, 6];
            let weekDay = weekEnds.indexOf((args.data.StartTime).getDay()) >= 0;
            let workHours = (args.data.StartTime.getHours < parseInt(scheduleObj.workHours.start)) || (args.data.StartTime.getHours > parseInt(scheduleObj.workHours.end));
            if (weekDay || workHours) {
                args.cancel = true;
            }
        }
    }
    return (<ScheduleComponent height='550px' width='100%' selectedDate={new Date(2018, 1, 15)} ref={t => scheduleObj = t} eventSettings={eventSettings} actionBegin={onActionBegin.bind(this)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
