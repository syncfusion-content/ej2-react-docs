import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: scheduleData };
  const onPopupOpen = (args) => {
    if (args.type === 'EventContainer') {
      let instance = new Internationalization();
      let date = instance.formatDate(args.data.date, { skeleton: 'MMMEd' });
      (args.element.querySelector('.e-header-date')).innerText = date;
      (args.element.querySelector('.e-header-day')).innerText = 'Event count: ' + args.data.event.length;
    }
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} currentView='Month' eventSettings={eventSettings} popupOpen={onPopupOpen}>
    <ViewsDirective>
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Month]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
