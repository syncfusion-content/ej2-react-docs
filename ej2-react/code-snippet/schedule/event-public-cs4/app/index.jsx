import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ScheduleComponent, Day, Week, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const scheduleObj = useRef(null);
  const eventSettings = { dataSource: scheduleData };

  const onChange = (args) => {
    scheduleObj.current.scrollTo(args.text);
  }
  return (
    <div className='content-wrapper'>
      <div className='property-section'>
        <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '30%' }}>
                <div className='col-md-4' style={{ paddingTop: '8px' }}>Scroll To</div>
              </td>
              <td style={{ width: '70%' }}>
                <div>
                  <TimePickerComponent width={100} value={new Date(2000, 0, 1, 9)} format='HH:mm'
                    change={onChange}></TimePickerComponent>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='control-section'>
        <ScheduleComponent width='100%' height='550px' ref={scheduleObj}
          selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
          <ViewsDirective>
            <ViewDirective option='Day' />
            <ViewDirective option='Week' />
            <ViewDirective option='TimelineDay' />
            <ViewDirective option='TimelineWeek' />
          </ViewsDirective>
          <Inject services={[Day, Week, TimelineViews]} />
        </ScheduleComponent>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);