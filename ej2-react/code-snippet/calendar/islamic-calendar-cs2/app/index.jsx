import { addClass } from '@syncfusion/ej2-base';
// import the calendarcomponent
import { CalendarComponent, Inject, Islamic } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';
function App() {
    const calendarMode = 'Islamic';
    // initialize the calendar mode
    function disableDate(args) {
        /*Date need to be disabled*/
        if (args.date.getDate() === 2 || args.date.getDate() === 10 || args.date.getDate() === 28) {
            args.isDisabled = true;
        }
        if (args.date.getDate() === 13) {
            let span;
            span = document.createElement('span');
            args.element.children[0].className += 'e-day sf-icon-cup highlight';
            addClass([args.element], ['special', 'e-day', 'dinner']);
            args.element.setAttribute('data-val', ' Dinner !');
            args.element.appendChild(span);
        }
        if (args.date.getDate() === 23) {
            args.element.children[0].className += 'e-day sf-icon-start highlight';
            let span;
            span = document.createElement('span');
            span.setAttribute('class', 'sf-icons-star highlight');
            // use the imported method to add the multiple classes to the given element
            addClass([args.element], ['special', 'e-day', 'holiday']);
            args.element.setAttribute('data-val', ' Holiday !');
            args.element.appendChild(span);
        }
    }
    return <CalendarComponent calendarMode={calendarMode} renderDayCell={disableDate}><Inject services={[Islamic]}/></CalendarComponent>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
