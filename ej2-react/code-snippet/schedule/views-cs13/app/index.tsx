import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Year, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';

const App = () => {
  const eventSettings = { dataSource: appData };

  return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}
    eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Year' showWeekNumber={true} readonly={true} />
    </ViewsDirective>
    <Inject services={[Year]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


