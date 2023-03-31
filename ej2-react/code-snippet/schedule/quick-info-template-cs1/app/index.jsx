import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, ResourcesDirective, ResourceDirective, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, Inject } from '@syncfusion/ej2-react-schedule';
import { extend, Internationalization } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ScheduleData } from './datasource';
function App() {
  let eventTypeObj;
  let titleObj;
  let notesObj;
  let scheduleObj;
  const intl = new Internationalization();
  const roomData = [
    { Name: 'Jammy', Id: 1, Capacity: 20, Color: '#ea7a57', Type: 'Conference' },
    { Name: 'Tweety', Id: 2, Capacity: 7, Color: '#7fa900', Type: 'Cabin' },
    { Name: 'Nestle', Id: 3, Capacity: 5, Color: '#5978ee', Type: 'Cabin' },
    { Name: 'Phoenix', Id: 4, Capacity: 15, Color: '#fec200', Type: 'Conference' },
    { Name: 'Mission', Id: 5, Capacity: 25, Color: '#df5286', Type: 'Conference' },
    { Name: 'Hangout', Id: 6, Capacity: 10, Color: '#00bdae', Type: 'Cabin' },
    { Name: 'Rick Roll', Id: 7, Capacity: 20, Color: '#865fcf', Type: 'Conference' },
    { Name: 'Rainbow', Id: 8, Capacity: 8, Color: '#1aaa55', Type: 'Cabin' },
    { Name: 'Swarm', Id: 9, Capacity: 30, Color: '#df5286', Type: 'Conference' },
    { Name: 'Photogenic', Id: 10, Capacity: 25, Color: '#710193', Type: 'Conference' }
  ];
  const scheduleData = extend([], ScheduleData, null, true);
  const eventSettings = { dataSource: scheduleData };
  const quickInfoTemplates = {
    header: headerTemplate,
    content: contentTemplate,
    footer: footerTemplate
  };
  function getResourceData(data) {
    const resources = scheduleObj.getResourceCollections().slice(-1)[0];
    const resourceData = resources.dataSource.filter((resource) => resource.Id === data.RoomId)[0];
    return resourceData;
  }
  function getHeaderStyles(data) {
    if (data.elementType === 'cell') {
      return { alignItems: 'center', color: '#919191' };
    }
    else {
      const resourceData = getResourceData(data);
      return { background: resourceData.Color, color: '#FFFFFF' };
    }
  }
  function getHeaderTitle(data) {
    return (data.elementType === 'cell') ? 'Add Appointment' : 'Appointment Details';
  }
  function getHeaderDetails(data) {
    return intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
      intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
      intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
  }
  function getEventType(data) {
    const resourceData = getResourceData(data);
    return resourceData.Name;
  }
  function buttonClickActions(e) {
    const quickPopup = scheduleObj.element.querySelector('.e-quick-popup-wrapper');
    const getSlotData = () => {
      const cellDetails = scheduleObj.getCellDetails(scheduleObj.getSelectedElements());
      const addObj = {};
      addObj.Id = scheduleObj.getEventMaxID();
      addObj.Subject = titleObj.value;
      addObj.StartTime = new Date(+cellDetails.startTime);
      addObj.EndTime = new Date(+cellDetails.endTime);
      addObj.Description = notesObj.value;
      addObj.RoomId = eventTypeObj.value;
      return addObj;
    };
    if (e.target.id === 'add') {
      const addObj = getSlotData();
      scheduleObj.addEvent(addObj);
    }
    else if (e.target.id === 'delete') {
      const eventDetails = scheduleObj.activeEventData.event;
      let currentAction = 'Delete';
      if (eventDetails.RecurrenceRule) {
        currentAction = 'DeleteOccurrence';
      }
      scheduleObj.deleteEvent(eventDetails, currentAction);
    }
    else {
      const isCellPopup = quickPopup.firstElementChild.classList.contains('e-cell-popup');
      const eventDetails = isCellPopup ? getSlotData() :
        scheduleObj.activeEventData.event;
      let currentAction = isCellPopup ? 'Add' : 'Save';
      if (eventDetails.RecurrenceRule) {
        currentAction = 'EditOccurrence';
      }
      scheduleObj.openEditor(eventDetails, currentAction, true);
    }
    scheduleObj.closeQuickInfoPopup();
  }
  function headerTemplate(props) {
    return (<div className="quick-info-header">
      <div className="quick-info-header-content" style={getHeaderStyles(props)}>
        <div className="quick-info-title">{getHeaderTitle(props)}</div>
        <div className="duration-text">{getHeaderDetails(props)}</div>
      </div>
    </div>);
  }
  function contentTemplate(props) {
    return (<div className="quick-info-content">
      {props.elementType === 'cell' ?
        <div className="e-cell-content">
          <div className="content-area">
            <TextBoxComponent id="title" ref={(textbox) => titleObj = textbox} placeholder="Title" />
          </div>
          <div className="content-area">
            <DropDownListComponent id="eventType" ref={(ddl) => eventTypeObj = ddl} dataSource={roomData} fields={{ text: "Name", value: "Id" }} placeholder="Choose Type" index={0} popupHeight="200px" />
          </div>
          <div className="content-area">
            <TextBoxComponent id="notes" ref={(textbox) => notesObj = textbox} placeholder="Notes" />
          </div>
        </div>
        :
        <div className="event-content">
          <div className="meeting-type-wrap">
            <label>Subject</label>:
            <span>{props.Subject}</span>
          </div>
          <div className="meeting-subject-wrap">
            <label>Type</label>:
            <span>{getEventType(props)}</span>
          </div>
          <div className="notes-wrap">
            <label>Notes</label>:
            <span>{props.Description}</span>
          </div>
        </div>}
    </div>);
  }
  function footerTemplate(props) {
    return (<div className="quick-info-footer">
      {props.elementType == "cell" ?
        <div className="cell-footer">
          <ButtonComponent id="more-details" cssClass='e-flat' content="More Details" onClick={buttonClickActions.bind(this)} />
          <ButtonComponent id="add" cssClass='e-flat' content="Add" isPrimary={true} onClick={buttonClickActions.bind(this)} />
        </div>
        :
        <div className="event-footer">
          <ButtonComponent id="delete" cssClass='e-flat' content="Delete" onClick={buttonClickActions.bind(this)} />
          <ButtonComponent id="more-details" cssClass='e-flat' content="More Details" isPrimary={true} onClick={buttonClickActions.bind(this).bind(this)} />
        </div>}
    </div>);
  }
  return (<div className='schedule-control-section'>
    <div className='col-lg-12 control-section'>
      <div className='control-wrapper'>
        <ScheduleComponent id="schedule" cssClass='quick-info-template' ref={(schedule) => scheduleObj = schedule} height="650px" selectedDate={new Date(2020, 0, 9)} eventSettings={eventSettings} quickInfoTemplates={quickInfoTemplates}>
          <ResourcesDirective>
            <ResourceDirective field='RoomId' title='Room Type' name='MeetingRoom' textField='Name' idField='Id' colorField='Color' dataSource={roomData}></ResourceDirective>
          </ResourcesDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda]} />
        </ScheduleComponent>
      </div>
    </div>
  </div>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
