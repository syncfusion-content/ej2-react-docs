import React, { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, ResourcesDirective, ResourceDirective, Day, Week, WorkWeek, Month,
  Agenda, MonthAgenda, Inject, ResourcesModel, CellClickEventArgs, CurrentAction, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ScheduleData } from './datasource';

const App = () => {
  const eventTypeObj = useRef<DropDownListComponent>(null);
  const titleObj = useRef<TextBoxComponent>(null);
  const notesObj = useRef<TextBoxComponent>(null);
  const scheduleObj = useRef<ScheduleComponent>(null);
  const intl: Internationalization = new Internationalization();
  const headerTemplate = (props: { [key: string]: Date }): JSX.Element => {
    return (
      <div className="quick-info-header">
        <div className="quick-info-header-content" style={getHeaderStyles(props)}>
          <div className="quick-info-title">{getHeaderTitle(props)}</div>
          <div className="duration-text">{getHeaderDetails(props)}</div>
        </div>
      </div>
    );
  }

  const contentTemplate = (props: { [key: string]: string }): JSX.Element => {
    return (
      <div className="quick-info-content">
        {props.elementType === 'cell' ?
          <div className="e-cell-content">
            <div className="content-area">
              <TextBoxComponent id="title" ref={titleObj} placeholder="Title" />
            </div>
            <div className="content-area">
              <DropDownListComponent id="eventType" ref={eventTypeObj} dataSource={roomData}
                fields={{ text: "Name", value: "Id" }} placeholder="Choose Type" index={0} popupHeight="200px" />
            </div>
            <div className="content-area">
              <TextBoxComponent id="notes" ref={notesObj} placeholder="Notes" />
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
          </div>
        }
      </div>
    );
  }

  const footerTemplate = (props: { [key: string]: Object }): JSX.Element => {
    return (
      <div className="quick-info-footer">
        {props.elementType === "cell" ?
          <div className="cell-footer">
            <ButtonComponent id="more-details" cssClass='e-flat' content="More Details" onClick={buttonClickActions.bind(this)} />
            <ButtonComponent id="add" cssClass='e-flat' content="Add" isPrimary={true} onClick={buttonClickActions.bind(this)} />
          </div>
          :
          <div className="event-footer">
            <ButtonComponent id="delete" cssClass='e-flat' content="Delete" onClick={buttonClickActions.bind(this)} />
            <ButtonComponent id="more-details" cssClass='e-flat' content="More Details" isPrimary={true} onClick={buttonClickActions.bind(this).bind(this)} />
          </div>
        }
      </div>
    );
  }
  const roomData: { [key: string]: Object }[] = [
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
  const eventSettings: EventSettingsModel = { dataSource: ScheduleData };
  const quickInfoTemplates = {
    header: headerTemplate as any,
    content: contentTemplate as any,
    footer: footerTemplate as any
  };
  const getResourceData = (data: { [key: string]: Object }): { [key: string]: Object } => {
    const resources: ResourcesModel = scheduleObj.current.getResourceCollections().slice(-1)[0];
    const resourceData: { [key: string]: Object } = (resources.dataSource as Object[]).filter((resource: { [key: string]: Object }) =>
      resource.Id === data.RoomId)[0] as { [key: string]: Object };
    return resourceData;
  }

  const getHeaderStyles = (data: { [key: string]: Object }): Object => {
    if (data.elementType === 'cell') {
      return { alignItems: 'center', color: '#919191' };
    } else {
      const resourceData: { [key: string]: Object } = getResourceData(data);
      return { background: resourceData.Color, color: '#FFFFFF' };
    }
  }

  const getHeaderTitle = (data: { [key: string]: Object }): string => {
    return (data.elementType === 'cell') ? 'Add Appointment' : 'Appointment Details';
  }

  const getHeaderDetails = (data: { [key: string]: Date }): string => {
    return intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
      intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
      intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';

  }

  const getEventType = (data: { [key: string]: string }): string => {
    const resourceData: { [key: string]: Object } = getResourceData(data);
    return resourceData.Name as string;
  }

  const buttonClickActions = (e: Event) => {
    const quickPopup: HTMLElement = scheduleObj.current.element.querySelector('.e-quick-popup-wrapper') as HTMLElement;
    const getSlotData: Function = (): { [key: string]: Object } => {
      const cellDetails: CellClickEventArgs = scheduleObj.current.getCellDetails(scheduleObj.current.getSelectedElements());
      const addObj: { [key: string]: Object } = {};
      addObj.Id = scheduleObj.current.getEventMaxID();
      addObj.Subject = titleObj.current.value;
      addObj.StartTime = new Date(+cellDetails.startTime);
      addObj.EndTime = new Date(+cellDetails.endTime);
      addObj.Description = notesObj.current.value;
      addObj.RoomId = eventTypeObj.current.value;
      return addObj;
    };
    if ((e.target as HTMLElement).id === 'add') {
      const addObj: { [key: string]: Object } = getSlotData();
      scheduleObj.current.addEvent(addObj);
    } else if ((e.target as HTMLElement).id === 'delete') {
      const eventDetails: { [key: string]: Object } = scheduleObj.current.activeEventData.event as { [key: string]: Object };
      let currentAction: CurrentAction = 'Delete';
      if (eventDetails.RecurrenceRule) {
        currentAction = 'DeleteOccurrence';
      }
      scheduleObj.current.deleteEvent(eventDetails, currentAction);
    } else {
      const isCellPopup: boolean = (quickPopup.firstElementChild as HTMLElement).classList.contains('e-cell-popup');
      const eventDetails: { [key: string]: Object } = isCellPopup ? getSlotData() :
        scheduleObj.current.activeEventData.event as { [key: string]: Object };
      let currentAction: CurrentAction = isCellPopup ? 'Add' : 'Save';
      if (eventDetails.RecurrenceRule) {
        currentAction = 'EditOccurrence';
      }
      scheduleObj.current.openEditor(eventDetails, currentAction, true);
    }
    scheduleObj.current.closeQuickInfoPopup();
  }

  return (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent id="schedule" cssClass='quick-info-template' ref={scheduleObj} height="650px"
            selectedDate={new Date(2020, 0, 9)} eventSettings={eventSettings} quickInfoTemplates={quickInfoTemplates}>
            <ResourcesDirective>
              <ResourceDirective field='RoomId' title='Room Type' name='MeetingRoom' textField='Name' idField='Id'
                colorField='Color' dataSource={roomData}></ResourceDirective>
            </ResourcesDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>
  );

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);