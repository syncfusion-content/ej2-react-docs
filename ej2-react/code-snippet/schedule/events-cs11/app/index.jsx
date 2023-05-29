import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject
} from '@syncfusion/ej2-react-schedule';

const App = () => {
  const comparerFun = (args) => {
    args.sort((event1, event2) => event1.RankId.localeCompare(event2.RankId, undefined, { numeric: true }));
    return args;
  }
  const data = [{
    Id: 1,
    Subject: 'Rank 1',
    StartTime: new Date(2017, 9, 29, 10, 0),
    EndTime: new Date(2017, 9, 29, 11, 30),
    IsAllDay: false,
    RankId: '1'
  }, {
    Id: 2,
    Subject: 'Rank 3',
    StartTime: new Date(2017, 9, 29, 10, 30),
    EndTime: new Date(2017, 9, 29, 12, 30),
    IsAllDay: false,
    RankId: '3'
  }, {
    Id: 3,
    Subject: 'Rank 6',
    StartTime: new Date(2017, 9, 29, 7, 0),
    EndTime: new Date(2017, 9, 29, 14, 30),
    IsAllDay: false,
    RankId: '6'
  }, {
    Id: 4,
    Subject: 'Rank 9',
    StartTime: new Date(2017, 9, 29, 11, 0),
    EndTime: new Date(2017, 9, 29, 15, 30),
    IsAllDay: false,
    RankId: '9'
  }];
  const eventSettings = { dataSource: data, sortComparer: comparerFun }
  return <ScheduleComponent height='550px' selectedDate={new Date(2017, 9, 29)} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);