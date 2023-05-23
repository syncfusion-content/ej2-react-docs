import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, PopupOpenEventArgs, Inject
} from '@syncfusion/ej2-react-schedule';
import { extend, createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { scheduleData } from './datasource';

const App = () => {
  const eventSettings = { dataSource: scheduleData };

  const onPopupOpen = (args: PopupOpenEventArgs): void => {
    if (args.type === 'Editor') {
      if (!args.element.querySelector('.custom-field-row')) {
        let row: HTMLElement = createElement('div', { className: 'custom-field-row' });
        let formElement: HTMLElement = args.element.querySelector('.e-schedule-form');
        formElement.firstChild.insertBefore(row, formElement.firstChild.firstChild);
        let container: HTMLElement = createElement('div', { className: 'custom-field-container' });
        let inputEle: HTMLInputElement = createElement('input', {
          className: 'e-field', attrs: { name: 'EventType' }
        }) as HTMLInputElement;
        container.appendChild(inputEle);
        row.appendChild(container);
        let drowDownList: DropDownList = new DropDownList({
          dataSource: [
            { text: 'Public Event', value: 'public-event' },
            { text: 'Maintenance', value: 'maintenance' },
            { text: 'Commercial Event', value: 'commercial-event' },
            { text: 'Family Event', value: 'family-event' }
          ],
          fields: { text: 'text', value: 'value' },
          value: (args.data as { [key: string]: Object }).EventType as string,
          floatLabelType: 'Always', placeholder: 'Event Type'
        });
        drowDownList.appendTo(inputEle);
        inputEle.setAttribute('name', 'EventType');
      }
    }
  }

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)}
    eventSettings={eventSettings} popupOpen={onPopupOpen} >
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);

