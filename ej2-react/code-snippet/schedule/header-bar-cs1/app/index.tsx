import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, Month, Inject, ActionEventArgs, ToolbarActionArgs
} from '@syncfusion/ej2-react-schedule';
import { createElement, compile, extend } from '@syncfusion/ej2-base';
import { ItemModel } from '@syncfusion/ej2-react-navigations';
import { Popup } from '@syncfusion/ej2-popups';
import { scheduleData } from './datasource';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  let profilePopup: Popup;
  function onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
    if (args.requestType === 'toolbarItemRendering') {
      let userIconItem: ItemModel = {
        align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon'
      };
      args.items.push(userIconItem);
    }
  }
  function onActionComplete(args: ActionEventArgs): void {
    let scheduleElement: HTMLInputElement = document.getElementById('schedule') as HTMLInputElement;
    if (args.requestType === 'toolBarItemRendered') {
      let userIconEle: HTMLElement = scheduleElement.querySelector('.e-schedule-user-icon') as HTMLElement;
      userIconEle.onclick = () => {
        profilePopup.relateTo = userIconEle;
        profilePopup.dataBind();
        if (profilePopup.element.classList.contains('e-popup-close')) {
          profilePopup.show();
        } else {
          profilePopup.hide();
        }
      };
    }
    let userContentEle: HTMLElement = createElement('div', {
      className: 'e-profile-wrapper'
    });
    scheduleElement.parentElement.appendChild(userContentEle);

    let userIconEle: HTMLElement = scheduleElement.querySelector('.e-schedule-user-icon') as HTMLElement;
    let getDOMString: (data: object) => HTMLCollection = compile('<div class="profile-container"><div class="profile-image">' +
      '</div><div class="content-wrap"><div class="name">Nancy</div>' +
      '<div class="destination">Product Manager</div><div class="status">' +
      '<div class="status-icon"></div>Online</div></div></div>');
    let output: HTMLCollection = getDOMString({});
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
  return (<ScheduleComponent cssClass='schedule-header-bar' width='100%' height='550px' id='schedule'
    selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }}
    actionBegin={onActionBegin} actionComplete={onActionComplete}>
    <ViewsDirective>
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



