{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], appData, null, true) as Object[];
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}
    eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='Day' interval={2} displayName='2 Days' startHour='09:30' endHour='18:00' timeScale={{ enable: true, slotCount: 5 }} />
      <ViewDirective option='Week' interval={2} displayName='2 Weeks' showWeekend={false} isSelected={true} />
    </ViewsDirective>
    <Inject services={[Day, Week]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


{% endraw %}