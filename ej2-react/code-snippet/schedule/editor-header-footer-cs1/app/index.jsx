import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, PopupOpenEventArgs, Inject
} from '@syncfusion/ej2-react-schedule';
const App = () => {
  const scheduleObj = useRef(null);
  const today = new Date();
  const data = [{
    Id: 1,
    Subject: 'Surgery - Andrew',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    IsAllDay: false
  },
  {
    Id: 2,
    Subject: 'Consulting - John',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
    IsAllDay: false
  },
  {
    Id: 3,
    Subject: 'Therapy - Robert',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
    IsAllDay: false
  },
  {
    Id: 4,
    Subject: 'Observation - Steven',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
    IsAllDay: false
  }];
  const eventSettings = { dataSource: data };
  const editorHeaderTemplate = (props) => {
    return (
      <div id="event-header">
        {(props !== undefined) ? ((props.Subject) ? <div>{props.Subject}</div> : <div>Create New Event</div>) : <div></div>}
      </div>
    );
  }
  const editorFooterTemplate = () => {
    return (
      <div id="event-footer">
        <div id="verify">
          <input type="checkbox" id="check-box" value="unchecked" />
          <label htmlFor="check-box" id="text">
            Verified
          </label>
        </div>
        <div id="right-button">
          <button id="Save" className="e-control e-btn e-primary" disabled data-ripple="true">
            Save
          </button>
          <button id="Cancel" className="e-control e-btn e-primary" data-ripple="true">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  const onSaveButtonClick = (args) => {
    const data = {
      Id: args.data.Id,
      Subject: args.element.querySelector('#Subject').value,
      StartTime: args.element.querySelector('#StartTime').ej2_instances[0].value,
      EndTime: args.element.querySelector('#EndTime').ej2_instances[0].value,
      IsAllDay: args.element.querySelector('#IsAllDay').checked
    };
    if (args.target.classList.contains('e-appointment')) {
      scheduleObj.current.saveEvent(data, 'Save');
    } else {
      data.Id = scheduleObj.current.getEventMaxID();
      scheduleObj.current.addEvent(data);
    }
    scheduleObj.current.closeEditor();
  }
  const onPopupOpen = (args) => {
    if (args.type === 'Editor') {
      setTimeout(() => {
        const saveButton = args.element.querySelector('#Save');
        const cancelButton = args.element.querySelector('#Cancel');
        const checkBox = args.element.querySelector('#check-box');
        checkBox.onchange = () => {
          if (!checkBox.checked) {
            saveButton.setAttribute('disabled', '');
          } else {
            saveButton.removeAttribute('disabled');
          }
        };
        saveButton.onclick = () => {
          onSaveButtonClick(args);
        }
        cancelButton.onclick = () => {
          scheduleObj.current.closeEditor();
        };
      }, 100);

    }
  }
  return (<ScheduleComponent width='100%' height='550px' ref={scheduleObj}
    eventSettings={eventSettings}
    editorHeaderTemplate={editorHeaderTemplate}
    editorFooterTemplate={editorFooterTemplate}
    popupOpen={onPopupOpen}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
      <ViewDirective option='Agenda' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);