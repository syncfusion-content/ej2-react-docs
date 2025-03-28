import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import {
  ScheduleComponent,
  ViewDirective,
  Month,
  Resize,
  ExcelExport,
  DragAndDrop,
  Inject,
  ViewsDirective,
  EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { eventsData } from './datasource';

/**
 *  Schedule header customization sample
 */

const App = () => {
  const scheduleObj = useRef(null);
  const onTooltipOpen = (args) => {
    if (args.data.Subject === 'Vacation') {
      args.cancel = true;
    }
  };
  const eventSettings: EventSettingsModel = {
    dataSource: eventsData,
    enableTooltip: true,
    fields: {
      subject: { title: 'Name', name: 'Subject' },
      location: { title: 'Country Name', name: 'Location' },
      description: { title: 'Summary', name: 'Description' },
      startTime: { title: 'From', name: 'StartTime' },
      endTime: { title: 'To', name: 'EndTime' },
      startTimezone: { title: 'Origin', name: 'StartTimezone' },
      endTimezone: { title: 'Destination', name: 'EndTimezone' },
    },
  };

  return (
    <ScheduleComponent
      cssClass="excel-export"
      width="100%"
      height="550px"
      id="schedule"
      ref={scheduleObj}
      selectedDate={new Date(2025, 1, 10)}
      eventSettings={eventSettings}
      tooltipOpen={onTooltipOpen}
    >
      <ViewsDirective>
        <ViewDirective option="Month" />
      </ViewsDirective>
      <Inject services={[Month, Resize, DragAndDrop, ExcelExport]} />
    </ScheduleComponent>
  );
};

const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
