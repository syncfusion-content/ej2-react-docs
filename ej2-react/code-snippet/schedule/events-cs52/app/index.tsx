import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef } from 'react';
import {
  ScheduleComponent, Day, Week, TimelineViews, Month, Agenda, Inject,
  Resize, DragAndDrop, ActionEventArgs, PopupOpenEventArgs, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';

const App = () => {

  const scheduleObj = useRef(null);

  const eventsData: Record<string, any>[] = [
    { Id: 1, Subject: 'Board Meeting', StartTime: new Date(2025, 1, 26, 9, 30), EndTime: new Date(2025, 1, 26, 11, 0) },
    { Id: 2, Subject: 'Annual Conference', StartTime: new Date(2025, 2, 2, 10, 0), EndTime: new Date(2025, 2, 2, 11, 0) },
    { Id: 3, Subject: 'Tech Symposium', StartTime: new Date(2025, 2, 2, 10, 30), EndTime: new Date(2025, 2, 2, 11, 30) },
    { Id: 4, Subject: 'Project Workshop', StartTime: new Date(2025, 2, 10, 9, 0), EndTime: new Date(2025, 2, 10, 11, 0) },
    { Id: 5, Subject: 'Client Presentation', StartTime: new Date(2025, 2, 5, 9, 0), EndTime: new Date(2025, 2, 5, 10, 30) },
    { Id: 6, Subject: 'Business Meetup', StartTime: new Date(2025, 2, 15, 11, 0), EndTime: new Date(2025, 2, 15, 13, 0) },
    { Id: 7, Subject: 'Project Review', StartTime: new Date(2025, 2, 13, 10, 0), EndTime: new Date(2025, 2, 13, 13, 0) }
  ];

  const eventSettings: EventSettingsModel = { dataSource: eventsData };

  const checkOverlap = (args: ActionEventArgs): Promise<boolean> => {
    return new Promise((resolve) => {
      let eventsToCheck: Record<string, any>[] = Array.isArray(args.data) ? args.data : [args.data];
      const overlappingEvents = eventsData.filter(event =>
        eventsToCheck.some(newEvent =>
          new Date(event.StartTime) < newEvent.EndTime &&
          new Date(event.EndTime) > newEvent.StartTime &&
          event.Id !== newEvent.Id
        )
      );

      let result: boolean = overlappingEvents.length === 0;
      if (!result && scheduleObj.current) {
        const popupArgs: PopupOpenEventArgs = {
          type: 'OverlapAlert',
          data: eventsToCheck,
          overlapEvents: overlappingEvents,
          element: null,
          cancel: false
        };
        scheduleObj.current.openOverlapAlert(popupArgs);
      }
      resolve(result);
    });
  };

  const onActionBegin = (args: ActionEventArgs): void => {
    if ((args.requestType === 'eventCreate') || (args.requestType === 'eventChange')) {
      const result: Promise<boolean> = checkOverlap(args);
      args.promise = result;
    }
  };

  const overlapEvent: Record<string, any> = {
    Id: 8,
    Subject: 'OverlapEvent',
    StartTime: new Date(2025, 2, 13, 10, 0),
    EndTime: new Date(2025, 2, 13, 11, 0)
  };

  const nonOverlapEvent: Record<string, any> = {
    Id: 9,
    Subject: 'Non-OverlapEvent',
    StartTime: new Date(2025, 2, 12, 10, 0),
    EndTime: new Date(2025, 2, 12, 11, 0)
  };

  const addOverlapEvent = (): void => {
    if (scheduleObj.current) {
      scheduleObj.current.addEvent(overlapEvent);
    }
  };

  const addNonOverlapEvent = (): void => {
    if (scheduleObj.current) {
      scheduleObj.current.addEvent(nonOverlapEvent);
    }
  };

  return (
    <div>
      <ScheduleComponent
        ref={scheduleObj}
        height='550px'
        selectedDate={new Date(2025, 2, 6)}
        allowOverlap={false}
        eventSettings={eventSettings}
        actionBegin={onActionBegin}
        views={['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda']} >
        <Inject services={[Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>

      <div>
        <button id="AddOverlapEvent" onClick={addOverlapEvent}>Add Overlap Event</button>
        <button id="AddNonOverlapEvent" onClick={addNonOverlapEvent} style={{ marginLeft: '10px' }}>Add Non-Overlap Event</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
