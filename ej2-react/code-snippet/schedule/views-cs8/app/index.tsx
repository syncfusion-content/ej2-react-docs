{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
  const data: Object[] = extend([], appData, null, true) as Object[];
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} >
    <ViewsDirective>
      <ViewDirective option='Week' dateFormat='dd-MMM-yyyy' />
      <ViewDirective option='Month' showWeekend={false} readonly={true} />
    </ViewsDirective>
    <Inject services={[Week, Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



{% endraw %}