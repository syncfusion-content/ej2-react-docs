

// import the calendarcomponent
import { CalendarComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {

    // initialize the value
    const dateValue: Date = new Date();

    function highlightWeekend(args: RenderDayCellEventArgs): void {
        if ((args.date as Date).getDay() === 0 || (args.date as Date).getDay() === 6) {
            // To highlight the week end of every month
            args.element.classList.add('e-highlightweekend');
        }
    }

    return <CalendarComponent id="calendar" renderDayCell={highlightWeekend} value={dateValue} />

};
ReactDOM.render(<App />, document.getElementById('element'));


