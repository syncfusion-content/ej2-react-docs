



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, Month, PopupOpenEventArgs, Inject
} from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

function App() {
  let scheduleObj: ScheduleComponent;
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  function onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'EventContainer') {
      args.cancel = true;
    }
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}
    ref={schedule => scheduleObj = schedule} currentView='Month'
    eventSettings={{ dataSource: data }} popupOpen={onPopupOpen} >
    <ViewsDirective>
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


