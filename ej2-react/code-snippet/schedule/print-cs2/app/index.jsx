import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Print, Inject} from '@syncfusion/ej2-react-schedule';
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
    let printModel = {
      agendaDaysCount: 14,
      cssClass: 'e-print-schedule',
      currentView: scheduleObj.current.currentView,
      dateFormat: 'dd-MMM-yyyy',
      enableRtl: false,
      endHour: '18:00',
      firstDayOfWeek: 1,
      firstMonthOfYear: 0,
      group: {},
      height: 'auto',
      locale: scheduleObj.current.locale,
      maxDate: scheduleObj.current.selectedDate,
      minDate: scheduleObj.current.getCurrentViewDates()[0],
      readonly: true,
      resources: [],
      rowAutoHeight: false,
      selectedDate: new Date(),
      showHeaderBar: false,
      showTimeIndicator: false,
      showWeekNumber: false,
      showWeekend: false,
      startHour: '06:00',
      timeFormat: 'HH',
      timeScale: { enable: true },
      width: 'auto',
      workDays: [1, 2, 3, 4, 5],
      workHours: { highlight: true, start: '10:00', end: '20:00' }
    };
    scheduleObj.current.print(printModel);
  }

  return (
    <div>
      <ScheduleComponent ref={scheduleObj} width='100%' height='520px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} actionBegin={onActionBegin}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Print]} />
      </ScheduleComponent></div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);