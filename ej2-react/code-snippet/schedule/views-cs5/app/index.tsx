import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, HeaderRowDirective, HeaderRowsDirective, TimelineMonth, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { eventData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], eventData, null, true) as Object[];
  const eventSettings = { dataSource: data }

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 0, 1)}
    eventSettings={eventSettings}>
    <HeaderRowsDirective>
      <HeaderRowDirective option='Month' />
      <HeaderRowDirective option='Date' />
    </HeaderRowsDirective>
    <ViewsDirective>
      <ViewDirective option='TimelineMonth' interval={12} />
    </ViewsDirective>
    <Inject services={[TimelineMonth]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


