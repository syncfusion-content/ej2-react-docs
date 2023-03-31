import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Print, EventSettingsModel, Inject, ScheduleModel, ActionEventArgs, ToolbarActionArgs } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
import { ItemModel } from '@syncfusion/ej2-react-navigations';

function App() {
  let scheduleObj: ScheduleComponent;
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };

  function onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
    if (args.requestType === 'toolbarItemRendering') {
      let exportItem: ItemModel = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
        text: 'Print', cssClass: 'e-schedule-print', click: onPrintIconClick
      };
      args.items.push(exportItem);
    }
  }

  function onPrintIconClick(): void {
    let printModel: ScheduleModel = {
      agendaDaysCount: 14,
      cssClass: 'e-print-schedule',
      currentView: scheduleObj.currentView,
      dateFormat: 'dd-MMM-yyyy',
      enableRtl: false,
      endHour: '18:00',
      firstDayOfWeek: 1,
      firstMonthOfYear: 0,
      group: {},
      height: 'auto',
      locale: scheduleObj.locale,
      maxDate: scheduleObj.selectedDate,
      minDate: scheduleObj.getCurrentViewDates()[0],
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
    scheduleObj.print(printModel);
  }

  return (
    <div>
      <ScheduleComponent ref={schedule => scheduleObj = schedule} width='100%' height='520px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} actionBegin={onActionBegin}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Print]} />
      </ScheduleComponent></div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


