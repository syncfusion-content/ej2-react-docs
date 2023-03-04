import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
import { loadCldr } from '@syncfusion/ej2-base';
import * as numberingSystems from '../numberingSystems.json';
import * as gregorian from '../ca-gregorian.json';
import * as numbers from '../numbers.json';
import * as timeZoneNames from '../timeZoneNames.json';
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

function App() {
  const data: Object[] = extend([], scheduleData, undefined, true) as Object[];
  return (<ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} locale='fr-CH' eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


