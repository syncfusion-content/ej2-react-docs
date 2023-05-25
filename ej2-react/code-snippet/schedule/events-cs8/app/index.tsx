import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';

const App = () => {
  const data: object[] = [{
    TravelId: 2,
    TravelSummary: 'Paris',
    DepartureTime: new Date(2018, 1, 15, 10, 0),
    ArrivalTime: new Date(2018, 1, 15, 12, 30),
    FullDay: false,
    Source: 'London',
    Comments: 'Summer vacation planned for outstation.',
    Origin: 'Asia/Yekaterinburg',
    Destination: 'Asia/Yekaterinburg'
  }];
  const fieldsData = {
    id: 'TravelId',
    subject: { name: 'TravelSummary' },
    isAllDay: { name: 'FullDay' },
    location: { name: 'Source' },
    description: { name: 'Comments' },
    startTime: { name: 'DepartureTime' },
    endTime: { name: 'ArrivalTime' },
    startTimezone: { name: 'Origin' },
    endTimezone: { name: 'Destination' }
  }
  const eventSettings: EventSettingsModel = { dataSource: data, fields: fieldsData }

  return (<ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>);

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



