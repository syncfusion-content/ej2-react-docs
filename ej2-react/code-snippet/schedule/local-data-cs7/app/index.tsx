import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';

const App = () => {
  let calendarId: string = '5105trob9dasha31vuqek6qgp0@group.calendar.google.com';
  let publicKey: string = 'AIzaSyD76zjMDsL_jkenM5AAnNsORypS1Icuqxg';
  const dataManger: DataManager = new DataManager({
    url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + publicKey,
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  });
  const eventSettings: EventSettingsModel = { dataSource: dataManger };

  const onDataBinding = (e: { [key: string]: Object }): void => {
    let items: { [key: string]: Object }[] = (e.result as { [key: string]: Object }).items as { [key: string]: Object }[];
    let scheduleData: Object[] = [];
    if (items.length > 0) {
      for (let i: number = 0; i < items.length; i++) {
        let event: { [key: string]: Object } = items[i];
        let when: string = (event.start as { [key: string]: Object }).dateTime as string;
        let start: string = (event.start as { [key: string]: Object }).dateTime as string;
        let end: string = (event.end as { [key: string]: Object }).dateTime as string;
        if (!when) {
          when = (event.start as { [key: string]: Object }).date as string;
          start = (event.start as { [key: string]: Object }).date as string;
          end = (event.end as { [key: string]: Object }).date as string;
        }
        scheduleData.push({
          Id: event.id,
          Subject: event.summary,
          StartTime: new Date(start),
          EndTime: new Date(end),
          IsAllDay: !(event.start as { [key: string]: Object }).dateTime
        });
      }
    }
    e.result = scheduleData;
  }

  return (
    <ScheduleComponent width='100%'
      height='550px' selectedDate={new Date(2018, 10, 14)} readonly={true}
      eventSettings={eventSettings} dataBinding={onDataBinding}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);