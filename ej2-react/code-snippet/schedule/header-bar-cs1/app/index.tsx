import { useRef, useEffect } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, Month, Inject, ActionEventArgs, ToolbarActionArgs, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { createElement, compile } from '@syncfusion/ej2-base';
import { ItemModel } from '@syncfusion/ej2-react-navigations';
import { Popup } from '@syncfusion/ej2-popups';
import { scheduleData } from './datasource';

const App = () => {
  const schedule = useRef<ScheduleComponent>(null);
  const eventSettings: EventSettingsModel = { dataSource: scheduleData };
  let profilePopup: Popup;
  const onActionBegin = (args: ActionEventArgs & ToolbarActionArgs): void => {
    if (args.requestType === 'toolbarItemRendering') {
      const userIconItem: ItemModel = {
        align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon'
      };
      args.items.push(userIconItem);
    }
  }

  const onActionComplete = (args: ActionEventArgs): void => {
    const scheduleElement: HTMLElement = document.getElementById('schedule');
    if (args.requestType === 'toolBarItemRendered' && scheduleElement) {
      const userIconEle: HTMLElement = scheduleElement.querySelector('.e-schedule-user-icon');
      if (userIconEle) {
        userIconEle.onclick = () => {
          if (profilePopup) {
            profilePopup.relateTo = userIconEle;
            profilePopup.dataBind();
            if (profilePopup.element.classList.contains('e-popup-close')) {
              profilePopup.show();
            } else {
              profilePopup.hide();
            }
          }
        };
      }
    }
  }

  useEffect(() => {
    const scheduleElement: HTMLElement = schedule.current.element;
    let profilePopup: Popup;
    if (scheduleElement) {
      const userContentEle: HTMLElement = createElement('div', {
        className: 'e-profile-wrapper'
      });
      scheduleElement.parentElement.appendChild(userContentEle);
      const userIconEle: HTMLElement | null = scheduleElement.querySelector('.e-schedule-user-icon');
      const getDOMString: (data: object) => NodeList = compile('<div class="profile-container"><div class="profile-image">' +
        '</div><div class="content-wrap"><div class="name">Nancy</div>' +
        '<div class="destination">Product Manager</div><div class="status">' +
        '<div class="status-icon"></div>Online</div></div></div>');
      const output: NodeList = getDOMString({});
      profilePopup = new Popup(userContentEle, {
        content: output[0] as HTMLElement,
        relateTo: userIconEle,
        position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' },
        targetType: 'relative',
        viewPortElement: scheduleElement,
        width: 185,
        height: 80
      });
      profilePopup.hide();
    }
  }, []);
  return (<ScheduleComponent cssClass='schedule-header-bar' width='100%' height='550px' ref={schedule}
    selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}
    actionBegin={onActionBegin} actionComplete={onActionComplete}>
    <ViewsDirective>
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);