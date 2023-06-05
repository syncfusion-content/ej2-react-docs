import { useRef, useEffect } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

const App = () => {
  const initialLoad = useRef(true);
  const scheduleRef = useRef(null);

  useEffect(() => {
    if (initialLoad.current) {
      const allDayAppointmentSection = scheduleRef.current.element.querySelector('.e-all-day-appointment-section');
      if (allDayAppointmentSection) {
        allDayAppointmentSection.click();
      }
      initialLoad.current = false;
    }
  }, []);

  const data = [
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
    },
  ];
  const eventSettings = { dataSource: data };

  return (
    <ScheduleComponent
      height="550px"
      ref={scheduleRef}
      selectedDate={new Date(2022, 3, 26)}
      eventSettings={eventSettings}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
    </ScheduleComponent>
  );
};


const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
