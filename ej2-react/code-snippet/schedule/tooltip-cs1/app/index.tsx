import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { eventsData } from './datasource';

const App = () => {
  const eventSettings: EventSettingsModel = {
    dataSource: eventsData, enableTooltip: true,
    tooltipTemplate: template
  };
  const template = (props) => {
    return (<div className="tooltip-wrap">
      <div className="content-area"><div className="name">{props.Subject}</div>
        {(props.City !== null && props.City !== undefined) ? <div className="city">{props.City}</div> : ''}
        <div className="time">From :{props.StartTime.toLocaleString()}</div>
        <div className="time">To  :{props.EndTime.toLocaleString()}</div></div></div>);
  }

  return (
    <ScheduleComponent width='100%' height='500px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


