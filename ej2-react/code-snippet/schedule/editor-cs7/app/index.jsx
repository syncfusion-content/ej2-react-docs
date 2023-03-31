
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { scheduleData } from './datasource';
function App() {
  let scheduleObj;
  const data = extend([], scheduleData, null, true);
  const eventSettings = { dataSource: data };

  function onPopupOpen(args) {
    if (args.type === 'Editor') {
      let statusElement = args.element.querySelector('#EventType');
      statusElement.setAttribute('name', 'EventType');
      if (!isNullOrUndefined(document.getElementById("EventType_Error"))) {
        document.getElementById("EventType_Error").style.display = "none";
        document.getElementById("EventType_Error").style.left = "351px";
      }
      let formElement = args.element.querySelector('.e-schedule-form');
      let validator = formElement.ej2_instances[0];
      validator.addRules('EventType', { required: true });
    }
  }
  function onSelect(args) {
    if (!isNullOrUndefined(document.getElementById("EventType_Error"))) {
      document.getElementById("EventType_Error").style.display = "none";
    }
  }
  function editorTemplate(props) {
    return ((props !== undefined) ? <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}><tbody>
      <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
        <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">Status</td><td colSpan={4}>
        <DropDownListComponent id="EventType" placeholder='Choose status' data-name='EventType' className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']}>
        </DropDownListComponent>
      </td></tr>
      <tr><td className="e-textlabel">From</td><td colSpan={4}>
        <DateTimePickerComponent id="StartTime" format='dd/MM/yy hh:mm a' data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">To</td><td colSpan={4}>
        <DateTimePickerComponent id="EndTime" format='dd/MM/yy hh:mm a' data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
        <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
      </td></tr></tbody></table> : <div></div>);
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} ref={schedule => scheduleObj = schedule} eventSettings={eventSettings} editorTemplate={editorTemplate} popupOpen={onPopupOpen} showQuickInfo={false}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
