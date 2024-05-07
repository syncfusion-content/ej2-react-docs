// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    // initialize the value
    const dateValue = new Date();
    function highlightWeekend(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            // To highlight the week end of every month
            args.element.classList.add('e-highlightweekend');
        }
    }
    return <CalendarComponent id="calendar" renderDayCell={highlightWeekend} value={dateValue}/>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
