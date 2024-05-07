import * as React from "react";
import * as ReactDOM from "react-dom";
//import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
    'ar': {
        'calendar': {
            today: "اليوم"
        }
    }
});
function App() {
    return <CalendarComponent id="calendar" locale='ar' enableRtl={true}/>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
