{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, TimelineViews, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { Internationalization, extend } from '@syncfusion/ej2-base';

function App() {
  let scheduleObj: ScheduleComponent;
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const instance: Internationalization = new Internationalization();
  function onCreated(): void {
    scheduleObj.scrollTo(instance.formatDate(new Date(), { skeleton: 'hm' }));
  }
  return (<ScheduleComponent ref={schedule => scheduleObj = schedule} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} created={onCreated} >
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='TimelineWeek' />
    </ViewsDirective>
    <Inject services={[Day, Week, TimelineViews]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


{% endraw %}