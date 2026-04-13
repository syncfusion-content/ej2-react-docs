
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { scheduleData } from './datasource';
const App = () => {
  const startObj = useRef(null);
  const endObj = useRef(null);
  const eventSettings = { dataSource: scheduleData };

  const onPopupOpen = (args) => {
    if (args.type === 'Editor') {
      let subjectElement = args.element.querySelector('#Summary');
      if (subjectElement) {
        subjectElement.value = args.data.Subject || "";
      }
      let statusElement = args.element.querySelector('#EventType');
      if (statusElement) {
        statusElement.setAttribute('name', 'EventType');
      }
      let descriptionElement = args.element.querySelector('#Description');
      if (descriptionElement) {
        descriptionElement.value = args.data.Description || "";
      }
    }
  }
  const onPopupClose = (args) => {
    if (args.type === 'Editor' && !isNullOrUndefined(args.data)) {
      let subjectElement = args.element.querySelector('#Summary');
      if (subjectElement) {
        args.data.Subject = subjectElement.value;
      }
      let statusElement = args.element.querySelector('#EventType');
      if (statusElement) {
        args.data.EventType = statusElement.value;
      }
      args.data.StartTime = startObj.current.value;
      args.data.EndTime = endObj.current.value;
      let descriptionElement = args.element.querySelector('#Description');
      if (descriptionElement) {
        args.data.Description = descriptionElement.value;
      }
    }
  }
  function editorTemplate(props) {
    return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}><tbody>
      <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
        <input id="Summary" className="e-input" type="text" value="" name="Subject" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">Status</td><td colSpan={4}>
        <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']} value={props.EventType || null}></DropDownListComponent>
      </td></tr>
      <tr><td className="e-textlabel">From</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" ref={startObj} value={new Date(props.startTime || props.StartTime)}></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">To</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" ref={endObj} value={new Date(props.endTime || props.EndTime)}></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
        <textarea id="Description" className="e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
      </td></tr></tbody></table> : <div></div>);
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} editorTemplate={editorTemplate} showQuickInfo={false} popupOpen={onPopupOpen} popupClose={onPopupClose}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
      <ViewDirective option='Agenda' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>);
}
  ;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);