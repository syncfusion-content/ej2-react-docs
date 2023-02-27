



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Agenda, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
import { Internationalization, extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], appData, null, true) as Object[];
  const instance: Internationalization = new Internationalization();
  function getTimeString(value: Date) {
    return instance.formatDate(value, { skeleton: 'hm' });
  }
  function eventTemplate(props): JSX.Element {
    return (<div className="template-wrap">
      <div className="subject">{props.Subject}</div>
      <div className="time">
        Time: {getTimeString(props.StartTime)} - {getTimeString(props.EndTime)}</div>
    </div>
    );
  }
  return (<ScheduleComponent width='100%' height='550px' agendaDaysCount={3} selectedDate={new Date(2018, 1, 15)}
    eventSettings={{ dataSource: data }}>
    <ViewsDirective>
      <ViewDirective option='Agenda' eventTemplate={eventTemplate.bind(this)} allowVirtualScrolling={false} />
    </ViewsDirective>
    <Inject services={[Agenda]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


