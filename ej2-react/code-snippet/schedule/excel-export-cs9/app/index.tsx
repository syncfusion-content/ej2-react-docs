import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import { ItemModel } from '@syncfusion/ej2-react-navigations';
import {
  ScheduleComponent, ViewDirective, Week, Resize, ExcelExport, ExportOptions,
  ActionEventArgs, ToolbarActionArgs, DragAndDrop, Inject, ViewsDirective, EventSettingsModel, ExcelExportEventArgs, ExportFieldInfo
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

/**
 *  Schedule Export Custom Separator
 */

const App = () => {
  const scheduleObj = useRef(null);
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };

  const onActionBegin = (args: ActionEventArgs & ToolbarActionArgs): void => {
    if (args.requestType === 'toolbarItemRendering') {
      let exportItem: ItemModel = {
        align: 'Right',
        showTextOn: 'Both',
        prefixIcon: 'e-icon-schedule-excel-export',
        text: 'Excel Export',
        cssClass: 'e-excel-export',
        click: onExportClick,
      };
      args.items.push(exportItem);
    }
  };

  const onExportClick = (): void => {
    const exportFields: ExportFieldInfo[] = [
      { name: 'Id', text: 'Id' },
      { name: 'Subject', text: 'Summary' },
      { name: 'StartTime', text: 'Start Date' },
      { name: 'EndTime', text: 'End Date' },
      { name: 'Location', text: 'Place' },
    ];
    const exportValues: ExportOptions = { fieldsInfo: exportFields };
    scheduleObj.current.exportToExcel(exportValues, true);
  };

  const onExcelExport = (args: ExcelExportEventArgs) => {
    const worksheet = args.worksheets[0];
    worksheet.rows.unshift({
      index: 1,
      cells: [
        {
          index: 1,
          value: 'Sales Report',
          style: {
            bold: true,
            fontSize: 18,
            hAlign: 'Center',
            fill: { color: '#1E90FF' }, 
            color: '#FFFFFF',
          },
          colSpan: worksheet.columns.length,
        },
      ],
    });
    worksheet.rows.unshift({
      index: 2,
      cells: [
        {
          index: 1,
          value: 'Generated on: ' + new Date().toLocaleDateString(),
          style: {
            italic: true,
            fontSize: 12,
            hAlign: 'Left',
            fill: { color: '#D3D3D3' },
          },
          colSpan: worksheet.columns.length,
        },
      ],
    });

    worksheet.rows.forEach((row: any, idx: number) => {
      row.index = idx + 1;
    });

    worksheet.rows.push({
      index: worksheet.rows.length + 1,
      cells: [
        {
          index: 1,
          value: 'End of Report',
          style: {
            bold: true,
            fontSize: 14,
            hAlign: 'Center',
            fill: { color: '#FFD700' },
          },
          colSpan: worksheet.columns.length,
        },
      ],
    });
  };

  return (
    <ScheduleComponent
      cssClass="excel-export"
      width="100%"
      height="550px"
      id="schedule"
      ref={scheduleObj}
      selectedDate={new Date(2025, 0, 10)}
      eventSettings={eventSettings}
      actionBegin={onActionBegin}
      excelExport={onExcelExport}
    >
      <ViewsDirective>
        <ViewDirective option="Week" />
      </ViewsDirective>
      <Inject services={[Week, Resize, DragAndDrop, ExcelExport]} />
    </ScheduleComponent>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


