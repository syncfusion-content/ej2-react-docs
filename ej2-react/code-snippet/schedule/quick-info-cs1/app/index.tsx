import { useRef } from 'react';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { ScheduleComponent, Day, Week, WorkWeek, Month, EventSettingsModel, Agenda, Inject, CellClickEventArgs, CurrentAction, Resize, DragAndDrop } from "@syncfusion/ej2-react-schedule";
import { scheduleData } from './datasource';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };
  const buttonClickActions = (e: Event): void => {
    let eventData: { [key: string]: Object } = {};
    let actionType: CurrentAction = "Add";
    const action: string = (e.target as HTMLElement).id;

    const getSlotData: Function = (): { [key: string]: Object } => {
      const cellDetails: CellClickEventArgs = scheduleObj.current.getCellDetails(scheduleObj.current.getSelectedElements());
      const eventData: { [key: string]: Object; } = scheduleObj.current.eventWindow.getObjectFromFormData("e-quick-popup-wrapper");
      const addObj: { [key: string]: Object } = {};

      addObj.Id = scheduleObj.current.getEventMaxID();
      addObj.Subject = (eventData.Subject as string).length > 0 ? eventData.Subject : "Add title";
      addObj.StartTime = new Date(+cellDetails.startTime);
      addObj.EndTime = new Date(+cellDetails.endTime);
      addObj.Location = eventData.Location;

      return addObj;
    };

    switch (action) {
      case "add":
        eventData = getSlotData();
        scheduleObj.current.addEvent(eventData);
        break;
      case "edit":
      case "edit-series":
        eventData = scheduleObj.current.activeEventData.event as { [key: string]: Object; };
        actionType = eventData.RecurrenceRule ? action === "edit" ? "EditOccurrence" : "EditSeries" : "Save";

        if (actionType === "EditSeries")
          eventData = scheduleObj.current.eventBase.getParentEvent(eventData, true);

        scheduleObj.current.openEditor(eventData, actionType);
        break;
      case "delete":
      case "delete-series":
        eventData = scheduleObj.current.activeEventData.event as { [key: string]: Object; };
        actionType = eventData.RecurrenceRule ? action === "delete" ? "DeleteOccurrence" : "DeleteSeries" : "Delete";

        if (actionType === "DeleteSeries")
          eventData = scheduleObj.current.eventBase.getParentEvent(eventData, true);

        scheduleObj.current.deleteEvent(eventData, actionType);
        break;
      case "more-details":
        eventData = getSlotData();
        scheduleObj.current.openEditor(eventData, "Add", true);
        break;
      default:
        break;
    }
    scheduleObj.current.closeQuickInfoPopup();
  }

  const header = (props: { [key: string]: string }): JSX.Element => {
    return (
      <div>
        {props.elementType === "cell" ? (
          <div className="e-cell-header e-popup-header">
            <div className="e-header-icon-wrapper">
              <button id="close" className="e-close e-close-icon e-icons" title="Close" onClick={buttonClickActions.bind(this)} />
            </div>
          </div>
        ) : (
          <div className="e-event-header e-popup-header">
            <div className="e-header-icon-wrapper">
              <button id="close" className="e-close e-close-icon e-icons" title="CLOSE" onClick={buttonClickActions.bind(this)} />
            </div>
          </div>
        )}
      </div>
    );
  }

  const content = (props: { [key: string]: string }): JSX.Element => {
    return (
      <div>
        {props.elementType === "cell" ? (
          <div className="e-cell-content e-template">
            <form className="e-schedule-form">
              <div>
                <input className="subject e-field e-input" type="text" name="Subject" placeholder="Title" />
              </div>
              <div>
                <input className="location e-field e-input" type="text" name="Location" placeholder="Location" />
              </div>
            </form>
          </div>
        ) : (
          <div className="e-event-content e-template">
            <div className="e-subject-wrap">
              {props.Subject !== undefined ? (
                <div className="subject">{props.Subject}</div>
              ) : (
                ""
              )}
              {props.Location !== undefined ? (
                <div className="location">{props.Location}</div>
              ) : (
                ""
              )}
              {props.Description !== undefined ? (
                <div className="description">{props.Description}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  const footer = (props: { [key: string]: string }): JSX.Element => {
    return (
      <div>
        {props.elementType === "cell" ? (
          <div className="e-cell-footer">
            <div className="left-button">
              <button id="more-details" className="e-event-details" title="Extra Details" onClick={buttonClickActions.bind(this)}> Extra Details </button>
            </div>
            <div className="right-button">
              <button id="add" className="e-event-create" title="Add" onClick={buttonClickActions.bind(this)} > Add </button>
            </div>
          </div>
        ) : (
          <div className="e-event-footer">
            <div className="left-button">
              <button id="edit" className="e-event-edit" title="Edit" onClick={buttonClickActions.bind(this)} > Edit </button>
              {!isNullOrUndefined(props.RecurrenceRule) &&
                props.RecurrenceRule !== "" ? (
                <button id="edit-series" className="e-edit-series" title="Edit Series" onClick={buttonClickActions.bind(this)}> Edit Series </button>
              ) : (
                ""
              )}
            </div>
            <div className="right-button">
              <button id="delete" className="e-event-delete" title="Delete" onClick={buttonClickActions.bind(this)} > Delete </button>
              {!isNullOrUndefined(props.RecurrenceRule) &&
                props.RecurrenceRule !== "" ? (
                <button id="delete-series" className="e-delete-series" title="Delete Series" onClick={buttonClickActions.bind(this)}> Delete Series </button>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
  const quickInfoTemplates = { header: header.bind(this), content: content.bind(this), footer: footer.bind(this) };
  return (<ScheduleComponent id="schedule" ref={scheduleObj} width="100%" height="550px" selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} quickInfoTemplates={quickInfoTemplates}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);