


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, RecurrenceEditorComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Inject, PopupOpenEventArgs, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

function App() {
  let scheduleObj: ScheduleComponent;
  let recurrObject: RecurrenceEditorComponent;
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };
  function onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor') {
      (scheduleObj.eventWindow as any).recurrenceEditor = recurrObject;
    }
  }
  function editorTemplate(props: Object): JSX.Element {
    return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%' }}>
      <tbody>
        <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
          <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
        </td></tr>
        <tr><td className="e-textlabel">Status</td><td colSpan={4}>
          <DropDownListComponent id="EventType" placeholder='Choose status' data-name="Status" className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']}>
          </DropDownListComponent>
        </td></tr>
        <tr><td className="e-textlabel">From</td><td colSpan={4}>
          <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date((props as any).startTime || (props as any).StartTime)} className="e-field"></DateTimePickerComponent>
        </td></tr>
        <tr><td className="e-textlabel">To</td><td colSpan={4}>
          <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date((props as any).endTime || (props as any).EndTime)} className="e-field"></DateTimePickerComponent>
        </td></tr>
        <tr><td className="e-textlabel">Recurrence</td><td colSpan={4}>
          <RecurrenceEditorComponent ref={recurrObject => recurrObject = recurrObject} id='RecurrenceEditor'></RecurrenceEditorComponent>
        </td></tr>
        <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
          <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
        </td></tr></tbody>
    </table> : '');
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}
    ref={schedule => scheduleObj = schedule}
    eventSettings={eventSettings} editorTemplate={editorTemplate} showQuickInfo={false}
    popupOpen={onPopupOpen} >
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


