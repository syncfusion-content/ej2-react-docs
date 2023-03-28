import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, Month, Inject,
  RenderCellEventArgs, ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { extend, createElement } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  function onRenderCell(args: RenderCellEventArgs): void {
    if (args.elementType == 'workCells' || args.elementType == 'monthCells') {
      let weekEnds: number[] = [0, 6];
      if (weekEnds.indexOf((args.date).getDay()) >= 0) {
        let ele: HTMLElement = createElement('div', {
          innerHTML: "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />",
          className: 'templatewrap'
        });
        (args.element).appendChild(ele);
      }
    }
  }
  return <ScheduleComponent height='550px' currentView='Month' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} renderCell={onRenderCell}
    cssClass='schedule-cell-template'>
    <ViewsDirective>
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, Month]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
