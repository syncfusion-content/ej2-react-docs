import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, Month, Timezone, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { fifaEventsData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
  let fifaEvents = extend([], fifaEventsData, null, true);
  const eventSettings = { dataSource: fifaEvents };

  let timezone = new Timezone();
  function onCreate() {
    for (let fifaEvent of fifaEvents) {
      let event = fifaEvent;
      event.StartTime = timezone.removeLocalOffset(event.StartTime);
      event.EndTime = timezone.removeLocalOffset(event.EndTime);
    }
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 5, 17)} created={onCreate} eventSettings={eventSettings} timezone='UTC'>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, Month]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
