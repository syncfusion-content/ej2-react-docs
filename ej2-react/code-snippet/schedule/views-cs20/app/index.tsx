import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, TimelineYear, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';

const App = () => {
  const eventSettings = { dataSource: appData };

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}
    eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='TimelineYear' displayName='Horizontal Timeline Year' isSelected={true} />
      <ViewDirective option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical'/>
    </ViewsDirective>
    <Inject services={[TimelineYear]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


