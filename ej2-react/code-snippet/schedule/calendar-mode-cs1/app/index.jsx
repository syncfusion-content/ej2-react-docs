import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, Month, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import * as localeObj from "./locale.json";
import arNumberData from '@syncfusion/ej2-cldr-data/main/ar/numbers.json';
import artimeZoneData from '@syncfusion/ej2-cldr-data/main/ar/timeZoneNames.json';
import arGregorian from '@syncfusion/ej2-cldr-data/main/ar/ca-gregorian.json';
import arIslamic from '@syncfusion/ej2-cldr-data/main/ar/ca-islamic.json';
import arNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(arNumberData, artimeZoneData, arGregorian, arIslamic, arNumberingSystem);
L10n.load(localeObj);

const App = () => {
    const eventSettings = { dataSource: scheduleData };
    return (<ScheduleComponent height='550px' showQuickInfo={false} selectedDate={new Date(2018, 1, 15)} locale='ar' eventSettings={eventSettings}>
      <ViewsDirective>
        <ViewDirective option='Day'/>
        <ViewDirective option='Week'/>
        <ViewDirective option='TimelineWorkWeek'/>
        <ViewDirective option='Month'/>
      </ViewsDirective>
      <Inject services={[Day, Week, Month, TimelineViews]}/>
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
