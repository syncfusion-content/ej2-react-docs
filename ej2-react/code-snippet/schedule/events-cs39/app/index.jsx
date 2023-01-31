{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    let data = extend([], scheduleData, null, true);
    function onActionBegin(args) {
        let weekEnds = [0, 6];
        if (args.requestType == 'eventCreate' && weekEnds.indexOf((args.data[0].StartTime).getDay()) >= 0) {
            args.cancel = true;
        }
    }
    return (<ScheduleComponent height='550px' width='100%' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} actionBegin={onActionBegin.bind(this)}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}