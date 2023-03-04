import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Print, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    let scheduleObj;
    const data = extend([], scheduleData, null, true);
    function onActionBegin(args) {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
                text: 'Print', cssClass: 'e-schedule-print', click: onPrintIconClick
            };
            args.items.push(exportItem);
        }
    }
    function onPrintIconClick() {
        scheduleObj.print();
    }
    return (<div>
    <ScheduleComponent ref={schedule => scheduleObj = schedule} width='100%' height='520px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} actionBegin={onActionBegin}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, Print]}/>
    </ScheduleComponent></div>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
