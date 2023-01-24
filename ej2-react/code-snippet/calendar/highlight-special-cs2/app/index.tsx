

// import the calendarcomponent
import { CalendarComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';

function App() {
     // initialize the value
    const dateValue: Date = new Date('03/10/2017');

    function customDates(args: RenderDayCellEventArgs): void {
        let span: HTMLElement;
        // defines the custom HTML element to be added.
        span = document.createElement('span');
        // Use "e-icons" class name to load Essential JS 2 built-in icons.
        span.setAttribute('class', 'e-icons highlight-day');
        if ((args.date as Date).getDate() === 7 && (args.date as Date).getMonth() === 3) {
            // append the span element to day cell.
            (args.element as HTMLElement).appendChild(span);
            // set the custom tooltip to the special dates.
            (args.element as HTMLElement).setAttribute('title', 'World health day!');
            // Use "special" class name to highlight the special dates, which you can refer in "styles.css".
            (args.element as HTMLElement).className = 'special';
        }
        if ((args.date as Date).getDate() === 21 && (args.date as Date).getMonth() === 2) {
            (args.element as HTMLElement).appendChild(span);
            (args.element as HTMLElement).className = 'special';
            // set the custom tooltip to the special dates.
            (args.element as HTMLElement).setAttribute('title', 'World forest day');
        }
    }
    return <CalendarComponent id="calendar" renderDayCell={customDates} value={dateValue} />
};
ReactDOM.render(<App />, document.getElementById('element'));


