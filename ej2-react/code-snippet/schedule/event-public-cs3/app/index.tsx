{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let scheduleObj: ScheduleComponent;
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  function onDataBound(): void {
    let event: Object[] = scheduleObj.getEvents();
    appendElement('Events present on scheduler <b>' + event.length + '<b><hr>');
  }
  function appendElement(html: string): void {
    let span: HTMLElement = document.createElement('span');
    span.innerHTML = html;
    let log: HTMLElement = document.getElementById('EventLog');
    log.insertBefore(span, log.firstChild);
  }
  function onClick(): void {
    document.getElementById('EventLog').innerHTML = '';
  }

  return (
    <div className='content-wrapper'>
      <div className='col-lg-9 control-section'>
        <ScheduleComponent ref={t => scheduleObj = t} width='100%' height='550px' selectedDate=
          {new Date(2018, 1, 15)} eventSettings={{ dataSource: data }} dataBound={onDataBound}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <div title='Event Trace'>
          <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
            <tbody>
              <tr style={{ height: '250px' }}>
                <td>
                  <div className='eventarea' style={{ height: '245px', overflow: 'auto' }}>
                    <span className='EventLog' id='EventLog' style={{ wordBreak: 'normal' }}></span>
                  </div>
                </td>
              </tr>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '30%' }}>
                  <div className='evtbtn' style={{ paddingBottom: '10px' }}>
                    <ButtonComponent title='Clear' onClick={onClick}>Clear</ButtonComponent>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


{% endraw %}