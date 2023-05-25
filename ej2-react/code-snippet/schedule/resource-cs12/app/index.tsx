import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import {
  TimelineMonth, Month, ScheduleComponent,
  ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-react-schedule';
import { holidayData, birthdayData, companyData, personalData } from './datasource';

const App = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const calendarCollections: Object[] = [
    { CalendarText: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
    { CalendarText: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
    { CalendarText: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
    { CalendarText: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
  ];

  const generateCalendarData = (): Object[] => {
    let collections: Object[] = [];
    let dataCollections: Object[][] = [personalData, companyData, birthdayData, holidayData];
    for (let data of dataCollections) {
      collections = collections.concat(data);
    }
    return collections;
  }
  let eventSettings: EventSettingsModel = { dataSource: generateCalendarData() };
  const group: GroupModel = { resources: ['Calendars'] };

  const onChange = (args: ChangeEventArgs): void => {
    let value: number = parseInt((args.event.target as Element).getAttribute('value'), 10);
    let resourceData: Object[] = calendarCollections.filter((calendar: { [key: string]: Object }) => calendar.CalendarId === value);
    if (args.checked) {
      scheduleObj.current.addResource(resourceData[0], 'Calendars', value - 1);
    } else {
      scheduleObj.current.removeResource(value, 'Calendars');
    }
  }
  return (
    <div>
      <tbody>
        <tr style={{ height: '50px' }}>
          <td style={{ width: '100%' }}>
            <CheckBoxComponent value='1' id='personal' checked={true} label='My Calendar' disabled={true}
              change={onChange} ></CheckBoxComponent>
            <CheckBoxComponent value='2' id='company' checked={false} label='Company'
              change={onChange} ></CheckBoxComponent>
            <CheckBoxComponent value='3' id='birthdays' checked={false} label='Birthday'
              change={onChange} ></CheckBoxComponent>
            <CheckBoxComponent value='4' id='holidays' checked={false} label='Holiday'
              change={onChange} ></CheckBoxComponent>
          </td>
        </tr>
      </tbody>
      <ScheduleComponent ref={scheduleObj} width='100%' height='550px' selectedDate={new Date(2018, 3, 1)} group={group}
        eventSettings={eventSettings} >
        <ResourcesDirective>
          <ResourceDirective field='CalendarId' title='Calendar' name='Calendars' allowMultiple={true}
            dataSource={[calendarCollections[0]]} textField='CalendarText' idField='CalendarId' colorField='CalendarColor'>
          </ResourceDirective>
        </ResourcesDirective>
        < ViewsDirective >
          <ViewDirective option='Month' />
          <ViewDirective option='TimelineMonth' />
        </ViewsDirective>
        <Inject services={[TimelineMonth, Month]} />
      </ScheduleComponent>
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);