import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, HeaderRowDirective, HeaderRowsDirective, TimelineMonth, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], scheduleData, null, true);
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 11, 31)} eventSettings={{ dataSource: data }}>
    <HeaderRowsDirective>
      <HeaderRowDirective option='Year'/>
      <HeaderRowDirective option='Month'/>
    </HeaderRowsDirective>
    <ViewsDirective>
      <ViewDirective option='TimelineMonth' interval={24}/>
    </ViewsDirective>
    <Inject services={[TimelineMonth]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
