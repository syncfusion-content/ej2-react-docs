import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, ViewsDirective, ViewDirective,
  Day, Week, WorkWeek, TimelineViews, Inject, EventSettingsModel, TimeScaleModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

const App = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };
  const instance = new Internationalization();
  const minorSlotTemplate = (props): JSX.Element => {
    return (<div style={{ textAlign: 'right', marginRight: '15px' }}>
      {instance.formatDate(props.date, { skeleton: 'ms' }).replace(':00', '')}</div>);
  }
  const majorSlotTemplate = (props): JSX.Element => {
    return (<div>{instance.formatDate(props.date, { skeleton: 'hm' })}</div>);
  }
  const timeScale: TimeScaleModel = {
    enable: true, interval: 60, slotCount: 6, majorSlotTemplate: majorSlotTemplate.bind(this),
    minorSlotTemplate: minorSlotTemplate.bind(this)
  };
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} timeScale={timeScale}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='TimelineWeek' />
      <ViewDirective option='WorkWeek' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, TimelineViews]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);