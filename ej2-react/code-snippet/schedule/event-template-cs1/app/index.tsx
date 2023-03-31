


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { webinarData } from './datasource';
import { Internationalization, extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], webinarData, undefined, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data, template: eventTemplate };

  const instance: Internationalization = new Internationalization();
  function getTimeString(value: Date) {
    return instance.formatDate(value, { skeleton: 'hm' });
  }
  function eventTemplate(props) {
    return (<div className="template-wrap" style={{ background: props.SecondaryColor }}>
      <div className="subject" style={{ background: props.PrimaryColor }}>{props.Subject}</div>
      <div className="time" style={{ background: props.PrimaryColor }}>
        Time: {getTimeString(props.StartTime)} - {getTimeString(props.EndTime)}</div>
    </div>);
  }

  return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} readonly={true}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


