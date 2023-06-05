import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const scheduleObj = useRef(null);
  const eventLog = useRef(null);
  const eventSettings = { dataSource: scheduleData };
  const onDataBound = () => {
    let event = scheduleObj.current.getCurrentViewEvents();
    if (event.length > 0) {
      appendElement('Events present on current view <b>' + event.length + '<b><hr>');
    } else {
      appendElement('No Events available in this view.<hr>');
    }
  }
  const appendElement = (html) => {
    let span = document.createElement('span');
    span.innerHTML = html;
    let log = eventLog.current;
    log.insertBefore(span, log.firstChild);
  }
  const onClick = () => {
    eventLog.current.innerHTML = '';
  }

  return (<div className='content-wrapper'>
    <div className='col-lg-9 control-section'>
      <ScheduleComponent ref={scheduleObj} width='100%' height='550px' selectedDate=
        {new Date(2018, 1, 15)} eventSettings={eventSettings} dataBound={onDataBound}>
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
                  <span className='EventLog' ref={eventLog} style={{ wordBreak: 'normal' }}></span>
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
  </div>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);