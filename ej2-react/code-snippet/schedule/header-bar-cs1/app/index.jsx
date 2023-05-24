import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ScheduleComponent, ViewsDirective, ViewDirective, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { createElement, compile } from '@syncfusion/ej2-base';
import { Popup } from '@syncfusion/ej2-popups';
import { scheduleData } from './datasource';

const App = () => {
    const schedule = useRef < ScheduleComponent > (null);
    const eventSettings = { dataSource: scheduleData };
    let profilePopup;
    const onActionBegin = (args) => {
        if (args.requestType === 'toolbarItemRendering') {
            const userIconItem = {
                align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon'
            };
            args.items.push(userIconItem);
        }
    }

    const onActionComplete = (args) => {
        const scheduleElement = document.getElementById('schedule');
        if (args.requestType === 'toolBarItemRendered' && scheduleElement) {
            const userIconEle = scheduleElement.querySelector('.e-schedule-user-icon');
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
        const scheduleElement = schedule.current.element;
        let profilePopup;
        if (scheduleElement) {
            const userContentEle = createElement('div', {
                className: 'e-profile-wrapper'
            });
            scheduleElement.parentElement?.appendChild(userContentEle);
            const userIconEle = scheduleElement.querySelector('.e-schedule-user-icon');
            const getDOMString = compile('<div class="profile-container"><div class="profile-image">' +
                '</div><div class="content-wrap"><div class="name">Nancy</div>' +
                '<div class="destination">Product Manager</div><div class="status">' +
                '<div class="status-icon"></div>Online</div></div></div>');
            const output = getDOMString({});
            profilePopup = new Popup(userContentEle, {
                content: output[0],
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