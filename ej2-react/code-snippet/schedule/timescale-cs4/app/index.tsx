import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Day, Week, TimelineViews, ScheduleComponent, ViewsDirective, ViewDirective, Inject
} from '@syncfusion/ej2-react-schedule';

function App() {
  return (<ScheduleComponent width='100%' height='550px' showTimeIndicator={true}>
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



