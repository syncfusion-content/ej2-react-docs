import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { Internationalization, extend } from '@syncfusion/ej2-base';
const App = () => {
  const scheduleObj = useRef(null);
  const data = extend([], scheduleData, null, true);
  const eventSettings = { dataSource: data };
  const instance = new Internationalization();
  const onCreated = () => {
    scheduleObj.current.scrollTo(instance.formatDate(new Date(), { skeleton: 'hm' }));
  }
  return (<ScheduleComponent ref={scheduleObj} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} created={onCreated}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='TimelineWeek' />
    </ViewsDirective>
    <Inject services={[Day, Week, TimelineViews]} />
  </ScheduleComponent>);
}
  ;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
