import * as ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Print, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const scheduleObj = useRef(null);
  const eventSettings = { dataSource: scheduleData };

  const onActionBegin = (args) => {
    if (args.requestType === 'toolbarItemRendering') {
      let exportItem = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
        text: 'Print', cssClass: 'e-schedule-print', click: onPrintIconClick
      };
      args.items.push(exportItem);
    }
  }

  const onPrintIconClick = () => {
    scheduleObj.current.print();
  }

  return (<div>
    <ScheduleComponent ref={scheduleObj} width='100%' height='520px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} actionBegin={onActionBegin}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, Print]} />
    </ScheduleComponent></div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);