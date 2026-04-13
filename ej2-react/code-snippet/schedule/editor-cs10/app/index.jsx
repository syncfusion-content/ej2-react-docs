import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
const App = () => {
    return (<ScheduleComponent width='100%' height='550px' quickInfoOnSelectionEnd={true}>
    <ViewsDirective>
      <ViewDirective option='Day'/>
      <ViewDirective option='TimelineWeek'/>
      <ViewDirective option='Week'/>
      <ViewDirective option='WorkWeek'/>
    </ViewsDirective>
    <Inject services={[Day, TimelineViews, Week, WorkWeek]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
