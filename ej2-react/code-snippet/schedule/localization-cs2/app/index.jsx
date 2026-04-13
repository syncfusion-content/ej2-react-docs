import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { Ajax, L10n, loadCldr } from '@syncfusion/ej2-base';
import frNumberData from '@syncfusion/ej2-cldr-data/main/fr-CH/numbers.json';
import frtimeZoneData from '@syncfusion/ej2-cldr-data/main/fr-CH/timeZoneNames.json';
import frGregorian from '@syncfusion/ej2-cldr-data/main/fr-CH/ca-gregorian.json';
import frNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';
loadCldr(frNumberData, frtimeZoneData, frGregorian, frNumberingSystem);

let localeTexts;
let ajax = new Ajax('./locale.json', 'GET', false);
ajax.onSuccess = (value) => {
    localeTexts = value;
};
ajax.send();
L10n.load(JSON.parse(localeTexts));
const App = () => {
    const eventSettings = { dataSource: scheduleData }
    return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} locale='fr-CH' eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Day'/>
      <ViewDirective option='Week'/>
      <ViewDirective option='WorkWeek'/>
      <ViewDirective option='Month'/>
    </ViewsDirective>
    <Inject services={[Day, Week, WorkWeek, Month]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
