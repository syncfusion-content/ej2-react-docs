import { useRef, useState, useMemo, useEffect } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { closest, isNullOrUndefined, remove, removeClass } from '@syncfusion/ej2-base';
import { Query, DataManager } from '@syncfusion/ej2-data';
import {
  ScheduleComponent, ViewsDirective, ViewDirective,
  Day, Week, WorkWeek, Month, Agenda, Inject
} from '@syncfusion/ej2-react-schedule';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import { scheduleData } from './datasource';


const App = () => {
  const scheduleObj = useRef(null);
  const menuObj = useRef(null);
  const [eventObj, setEventObj] = useState(null);
  const eventSettings = { dataSource: scheduleData };

  let selectedTarget;
  const menuItems = useMemo(() => [{
    text: 'New Event',
    iconCss: 'e-icons new',
    id: 'Add'
  }, {
    text: 'New Recurring Event',
    iconCss: 'e-icons recurrence',
    id: 'AddRecurrence'
  }, {
    text: 'Today',
    iconCss: 'e-icons today',
    id: 'Today'
  }, {
    text: 'Edit Event',
    iconCss: 'e-icons edit',
    id: 'Save'
  }, {
    text: 'Edit Event',
    id: 'EditRecurrenceEvent',
    iconCss: 'e-icons edit',
    items: [{
      text: 'Edit Occurrence',
      id: 'EditOccurrence'
    }, {
      text: 'Edit Series',
      id: 'EditSeries'
    }]
  }, {
    text: 'Delete Event',
    iconCss: 'e-icons delete',
    id: 'Delete'
  }, {
    text: 'Delete Event',
    id: 'DeleteRecurrenceEvent',
    iconCss: 'e-icons delete',
    items: [{
      text: 'Delete Occurrence',
      id: 'DeleteOccurrence'
    }, {
      text: 'Delete Series',
      id: 'DeleteSeries'
    }]
  }
  ], [])


  const onMenuItemSelect = (args) => {
    let selectedMenuItem = args.item.id;
    if (selectedTarget && selectedTarget.classList.contains('e-appointment')) {
      setEventObj(scheduleObj.current.getEventDetails(selectedTarget));
    }
    switch (selectedMenuItem) {
      case 'Today':
        scheduleObj.current.selectedDate = new Date();
        break;
      case 'Add':
      case 'AddRecurrence':
        let selectedCells = scheduleObj.current.getSelectedElements();
        let activeCellsData = scheduleObj.current.getCellDetails(selectedCells.length > 0 ? selectedCells : selectedTarget);
        if (selectedMenuItem === 'Add') {
          scheduleObj.current.openEditor(activeCellsData, 'Add');
        } else {
          scheduleObj.current.openEditor(activeCellsData, 'Add', null, 1);
        }
        break;
      case 'Save':
      case 'EditOccurrence':
      case 'EditSeries':
        if (selectedMenuItem === 'EditSeries') {
          setEventObj(new DataManager(scheduleObj.current.eventsData).executeLocal(
            new Query().where(scheduleObj.current.eventFields.id,
              'equal', eventObj[scheduleObj.current.eventFields.recurrenceID][0])));
        }
        scheduleObj.current.openEditor(eventObj, selectedMenuItem);
        break;
      case 'Delete':
        scheduleObj.current.deleteEvent(eventObj);
        break;
      case 'DeleteOccurrence':
      case 'DeleteSeries':
        scheduleObj.current.deleteEvent(eventObj, selectedMenuItem);
        break;
    }
  }

  const onContextMenuBeforeOpen = (args) => {
    let newEventElement = document.querySelector('.e-new-event');
    if (newEventElement) {
      remove(newEventElement);
      removeClass([document.querySelector('.e-selected-cell')], 'e-selected-cell');
    }
    scheduleObj.current.closeQuickInfoPopup();
    let targetElement = args.event.target;
    if (closest(targetElement, '.e-contextmenu')) {
      return;
    }
    selectedTarget = closest(targetElement, '.e-appointment,.e-work-cells,' +
      '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
    if (isNullOrUndefined(selectedTarget)) {
      args.cancel = true;
      return;
    }
    if (selectedTarget.classList.contains('e-appointment')) {
      setEventObj(scheduleObj.current.getEventDetails(selectedTarget));
      return;
    }
    menuObj.current.hideItems(['Save', 'Delete', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
    menuObj.current.showItems(['Add', 'AddRecurrence', 'Today'], true);
  }
  useEffect(() => {
    if (eventObj && eventObj.RecurrenceRule) {
      menuObj.current.showItems(['EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
      menuObj.current.hideItems(['Add', 'AddRecurrence', 'Today', 'Save', 'Delete'], true);
    } else {
      menuObj.current.showItems(['Save', 'Delete'], true);
      menuObj.current.hideItems(['Add', 'AddRecurrence', 'Today', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
    }
  }, [eventObj]);

  return (
    <div className='schedule-control-section'>
      <div className='control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent height='550px' ref={scheduleObj} selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
              <ViewDirective option='Agenda' />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
      <ContextMenuComponent cssClass='schedule-context-menu' ref={menuObj} target='.e-schedule' items={menuItems} beforeOpen={onContextMenuBeforeOpen} select={onMenuItemSelect} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);