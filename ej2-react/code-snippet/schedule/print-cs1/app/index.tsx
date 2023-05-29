import * as ReactDOM from 'react-dom';
import { useRef } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel, Print, Inject, ActionEventArgs, ToolbarActionArgs } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { ItemModel } from '@syncfusion/ej2-react-navigations';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };

  const onActionBegin = (args: ActionEventArgs & ToolbarActionArgs): void => {
    if (args.requestType === 'toolbarItemRendering') {
      let exportItem: ItemModel = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
        text: 'Print', cssClass: 'e-schedule-print', click: onPrintIconClick
      };
      args.items.push(exportItem);
    }
  }

  const onPrintIconClick = (): void => {
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


