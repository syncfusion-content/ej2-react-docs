{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop, } from '@syncfusion/ej2-react-schedule';
let initialLoad = true;
function App() {

  const data: object[] = [
    {
      EndTime: new Date(2022, 3, 30, 0, 0),
      Id: '2',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 29, 0, 0),
      Subject: 'Plumbing Checklist | Jaimungal | 3671 :: Pool',
    },
    {
      EndTime: new Date(2022, 3, 30, 0, 0),
      Id: '4',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 28, 0, 0),
      Subject: 'Underground Plumbing | Jaimungal | 3671 :: Pool',
    },
    {
      EndTime: new Date(2022, 3, 30, 12, 30),
      Id: '7',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 24, 0, 0),
      Subject: 'Steel/ Checklist | VP Highland Model | 3719 :: Pool',
    },
    {
      EndTime: new Date(2022, 3, 30, 0, 0),
      Id: '9',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 29, 0, 0),
      Subject: 'Tile Selections/ Pavers/ Finish | VP Highland Model | 3719 :: Pool',
    },
    {
      EndTime: new Date(2022, 3, 30, 0, 0),
      Id: '10',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 26, 0, 0),
      Subject: 'Layout/ Form Rebar Shell | VP Highland Model | 3719 :: Pool',
    },
    {
      EndTime: new Date(2022, 3, 30, 0, 0),
      Id: '10',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 26, 0, 0),
      Subject: ' VP Highland Model | 3719 :: Pool',
    }
  ];

  function dataBound() {
    if (initialLoad) {
      element.querySelector('.e-all-day-appointment-section').click();
      initialLoad = false;
    }
  }

  return (<ScheduleComponent height="550px" dataBound={dataBound} selectedDate={new Date(2022, 3, 26)} eventSettings={{ dataSource: data }}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
  </ScheduleComponent>);

}
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


{% endraw %}