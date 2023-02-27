



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, WorkWeek, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], appData, null, true) as Object[];
  const workDays: number[] = [2, 3, 5];
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}
    eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='WorkWeek' workDays={workDays} />
    </ViewsDirective>
    <Inject services={[WorkWeek]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


