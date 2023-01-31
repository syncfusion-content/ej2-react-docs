import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';
function App() {
    // initialize the value
    let dateValue = new Date();
    function disabledDate(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            // set 'true' to disable the weekends
            args.isDisabled = true;
        }
    }
    return <CalendarComponent id="calendar" renderDayCell={disabledDate} value={dateValue}/>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
