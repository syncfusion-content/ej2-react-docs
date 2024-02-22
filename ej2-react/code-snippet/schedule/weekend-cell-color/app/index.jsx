import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: scheduleData };
  const onRendercell = (args) => {
    if (args.elementType == "workCells") {
      // To change the color of weekend columns in week view
      if (args.date) {
        if (args.date.getDay() === 6) {
          (args.element).style.background = '#ffdea2';
        }
        if (args.date.getDay() === 0) {
          (args.element).style.background = '#ffdea2';
        }
      }
    }
  };
  return <ScheduleComponent cssClass="schedule-cell-customization" width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} renderCell={onRendercell}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month]} />
  </ScheduleComponent>;
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);