import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, TimelineYear, Inject, ViewsDirective, ViewDirective, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData }

  return (<ScheduleComponent width='100%' height='550px' currentView='Month'
    selectedDate={new Date(2018, 1, 17)} rowAutoHeight={true} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='TimelineYear' displayName='Horizontal Timeline Year' isSelected={true} />
      <ViewDirective option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical' />
    </ViewsDirective>
    <Inject services={[TimelineYear]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


