// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';
function App() {
    // initialize the value
    const dateValue = new Date('03/10/2017');
    function customDates(args) {
        let span;
        // defines the custom HTML element to be added.
        span = document.createElement('span');
        // Use "e-icons" class name to load Essential JS 2 built-in icons.
        span.setAttribute('class', 'e-icons highlight-day');
        if (args.date.getDate() === 7 && args.date.getMonth() === 3) {
            // append the span element to day cell.
            args.element.appendChild(span);
            // set the custom tooltip to the special dates.
            args.element.setAttribute('title', 'World health day!');
            // Use "special" class name to highlight the special dates, which you can refer in "styles.css".
            args.element.className = 'special';
        }
        if (args.date.getDate() === 21 && args.date.getMonth() === 2) {
            args.element.appendChild(span);
            args.element.className = 'special';
            // set the custom tooltip to the special dates.
            args.element.setAttribute('title', 'World forest day');
        }
    }
    return <CalendarComponent id="calendar" renderDayCell={customDates} value={dateValue}/>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
