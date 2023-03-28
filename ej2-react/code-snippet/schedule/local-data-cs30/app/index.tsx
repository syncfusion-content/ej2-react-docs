import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
  ScheduleComponent, Day, Week, Month, Timezone, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { fifaEventsData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let fifaEvents: Object[] = extend([], fifaEventsData, null, true) as Object[];
  let timezone: Timezone = new Timezone();
  function onCreate(): void {
    for (let fifaEvent of fifaEvents) {
      let event: { [key: string]: Object } = fifaEvent as { [key: string]: Object };
      event.StartTime = timezone.removeLocalOffset(event.StartTime as Date);
      event.EndTime = timezone.removeLocalOffset(event.EndTime as Date);
    }
  }
  return (
    <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 5, 17)} created={onCreate} eventSettings={{ dataSource: fifaEvents }} timezone='UTC' >
      <ViewsDirective>
        <ViewDirective option='Day' />
        <ViewDirective option='Week' />
        <ViewDirective option='Month' />
      </ViewsDirective>
      <Inject services={[Day, Week, Month]} />
    </ScheduleComponent>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


