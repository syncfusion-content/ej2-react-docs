import { useRef, useState, useMemo, useEffect } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { closest, isNullOrUndefined, remove, removeClass } from '@syncfusion/ej2-base';
import { Query, DataManager } from '@syncfusion/ej2-data';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, CellClickEventArgs,
  Day, Week, WorkWeek, Month, Agenda, Inject
} from '@syncfusion/ej2-react-schedule';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs, MenuItemModel, ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import { scheduleData } from './datasource';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const eventSettings = { dataSource: scheduleData };
  const menuObj = useRef<ContextMenuComponent>(null);
  let selectedTarget: Element;
  let targetElement: HTMLElement;
  const menuItems: MenuItemModel[] = [
    { text: 'Cut Event', iconCss: 'e-icons e-cut', id: 'Cut' },
    { text: 'Copy Event', iconCss: 'e-icons e-copy', id: 'Copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste', id: 'Paste' }
  ];

  const onContextMenuBeforeOpen = (args: BeforeOpenCloseMenuEventArgs): void => {
    let newEventElement: HTMLElement = document.querySelector('.e-new-event') as HTMLElement;
    if (newEventElement) {
      remove(newEventElement);
    }
    scheduleObj.current.closeQuickInfoPopup();
    targetElement = args.event.target as HTMLElement;
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
      menuObj.current.showItems(['Cut', 'Copy'], true);
      menuObj.current.hideItems(['Paste'], true);
    } else {
      menuObj.current.showItems(['Paste'], true);
      menuObj.current.hideItems(['Cut', 'Copy'], true);
    }
  }

  const onMenuItemSelect = (args: MenuEventArgs): void => {
    let selectedMenuItem: string = args.item.id;
    switch (selectedMenuItem) {
      case 'Cut':
        scheduleObj.current.cut([selectedTarget] as HTMLElement[]);
        break;
      case 'Copy':
        scheduleObj.current.copy([selectedTarget] as HTMLElement[]);
        break;
      case 'Paste':
        scheduleObj.current.paste(targetElement);
        break;
    }
  }


  return (
    <div className='schedule-control-section'>
      <div className='control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent height='550px' ref={scheduleObj} selectedDate={new Date(2024, 1, 15)} eventSettings={eventSettings}>
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
      <ContextMenuComponent target='.e-schedule' items={menuItems}
        beforeOpen={onContextMenuBeforeOpen} select={onMenuItemSelect}
        cssClass='schedule-context-menu' ref={menuObj} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);