
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { extend, createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { scheduleData } from './datasource';
function App() {
    let scheduleObj;
    const data = extend([], scheduleData, null, true);
    const eventSettings = { dataSource: data };

    function onPopupOpen(args) {
        if (args.type === 'Editor') {
            if (!args.element.querySelector('.custom-field-row')) {
                let row = createElement('div', { className: 'custom-field-row' });
                let formElement = args.element.querySelector('.e-schedule-form');
                formElement.firstChild.insertBefore(row, formElement.firstChild.firstChild);
                let container = createElement('div', { className: 'custom-field-container' });
                let inputEle = createElement('input', {
                    className: 'e-field', attrs: { name: 'EventType' }
                });
                container.appendChild(inputEle);
                row.appendChild(container);
                let drowDownList = new DropDownList({
                    dataSource: [
                        { text: 'Public Event', value: 'public-event' },
                        { text: 'Maintenance', value: 'maintenance' },
                        { text: 'Commercial Event', value: 'commercial-event' },
                        { text: 'Family Event', value: 'family-event' }
                    ],
                    fields: { text: 'text', value: 'value' },
                    value: args.data.EventType,
                    floatLabelType: 'Always', placeholder: 'Event Type'
                });
                drowDownList.appendTo(inputEle);
                inputEle.setAttribute('name', 'EventType');
            }
        }
    }
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} ref={schedule => scheduleObj = schedule} eventSettings={eventSettings} popupOpen={onPopupOpen}>
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
