import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: scheduleData };

  const onPopupOpen = (args) => {
    if (args.type === 'Editor') {
      args.duration = 60;
    }
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} popupOpen={onPopupOpen}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month]} />
  </ScheduleComponent>);
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
