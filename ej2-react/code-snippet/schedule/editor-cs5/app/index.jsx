
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { eventData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: eventData };
  const group = { resources: ['Owners'] };

  const ownerData = [
    { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
    { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
    { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
  ];
  const fields = { text: 'OwnerText', value: 'Id' };
  const editorTemplate = (props) => {
    return (props !== undefined && Object.keys(props).length > 0 ? <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}><tbody>
      <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
        <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">Owner</td><td colSpan={4}>
        <MultiSelectComponent className="e-field" placeholder='Choose owner' data-name="OwnerId" dataSource={ownerData} fields={fields} value={props.OwnerId} />
      </td></tr>
      <tr><td className="e-textlabel">From</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">To</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
        <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
      </td></tr></tbody></table> : <div></div>);
  }
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} editorTemplate={editorTemplate} showQuickInfo={false} group={group}>
    <ResourcesDirective>
      <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={false} dataSource={ownerData} textField='OwnerText' idField='Id' allowGroupEdit={false} colorField='OwnerColor'></ResourceDirective>
    </ResourcesDirective>
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
