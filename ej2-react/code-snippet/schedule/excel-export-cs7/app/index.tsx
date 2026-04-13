import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import { ItemModel } from '@syncfusion/ej2-react-navigations';
import {
  ScheduleComponent, ViewDirective, Week, Resize, ExcelExport, ExportOptions,
  ActionEventArgs, ToolbarActionArgs, DragAndDrop, Inject, ViewsDirective, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

/**
 *  Schedule header customization sample
 */

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };
  const onActionBegin = (args: ActionEventArgs & ToolbarActionArgs): void => {
    if (args.requestType === 'toolbarItemRendering') {
      let exportItem: ItemModel = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
        text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
      };
      args.items.push(exportItem);
    }
  }

  const onExportClick = (): void => {
    let exportValues: ExportOptions = { exportType: "csv" };
    scheduleObj.current.exportToExcel(exportValues);
  }
  return (
    <ScheduleComponent cssClass='excel-export' width='100%' height='550px' id='schedule' ref={scheduleObj}
      selectedDate={new Date(2019, 0, 10)} eventSettings={eventSettings}
      actionBegin={onActionBegin}>
      <ViewsDirective>
        <ViewDirective option='Week' />
      </ViewsDirective>
      <Inject services={[Week, Resize, DragAndDrop, ExcelExport]} />
    </ScheduleComponent>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


