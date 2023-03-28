import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject,
  RenderCellEventArgs
} from '@syncfusion/ej2-react-schedule';
import { extend, removeClass } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

function App() {
  let data: Object[] = extend([], scheduleData, null, true) as Object[];
  function onRenderCell(args: RenderCellEventArgs): void {
    if (args.elementType === "dateHeader" || args.elementType === "monthCells") {
      removeClass(args.element.childNodes, "e-navigate");
    }
  }
  return (<ScheduleComponent width='100%' height='500px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} currentView='WorkWeek'
    renderCell={onRenderCell}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



