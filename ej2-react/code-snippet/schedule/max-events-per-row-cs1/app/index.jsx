import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: scheduleData };

  return (<ScheduleComponent width='100%' height='380px' selectedDate={new Date(2023, 11, 15)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Month' maxEventsPerRow={3}/>
    </ViewsDirective>
    <Inject services={[Month]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
