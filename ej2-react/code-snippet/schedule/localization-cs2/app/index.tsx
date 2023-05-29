import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Inject,
  ViewsDirective, ViewDirective, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { Ajax, L10n, loadCldr } from '@syncfusion/ej2-base';
import * as numberingSystems from '../numberingSystems.json';
import * as gregorian from '../ca-gregorian.json';
import * as numbers from '../numbers.json';
import * as detimeZoneNames from '../timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, detimeZoneNames);
let localeTexts: string;
let ajax: Ajax = new Ajax('./locale.json', 'GET', false);
ajax.onSuccess = (value: string) => {
  localeTexts = value;
};
ajax.send();
L10n.load(JSON.parse(localeTexts));

const App = () => {
  const eventSettings: EventSettingsModel = { dataSource: scheduleData};
  return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} locale='fr-CH' eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


