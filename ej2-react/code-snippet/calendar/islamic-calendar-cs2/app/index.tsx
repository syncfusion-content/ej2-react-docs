

import { addClass } from '@syncfusion/ej2-base';
// import the calendarcomponent
import {  CalendarComponent, CalendarType, Inject, Islamic, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';

function App() {

    const calendarMode: CalendarType = 'Islamic';

    // initialize the calendar mode

    function disableDate(args: RenderDayCellEventArgs) {
        /*Date need to be disabled*/
        if ((args.date as Date).getDate() === 2 || (args.date as Date).getDate() === 10 || (args.date as Date).getDate() === 28) {
            args.isDisabled = true;
        }
        if ((args.date as Date).getDate() === 13) {
            let span: HTMLElement;
            span = document.createElement('span');
            (args.element as HTMLElement).children[0].className += 'e-day sf-icon-cup highlight';
            addClass([args.element as HTMLElement], ['special', 'e-day', 'dinner']);
            (args.element as HTMLElement).setAttribute('data-val', ' Dinner !');
            (args.element as HTMLElement).appendChild(span);
        }
        if ((args.date as Date).getDate() === 23) {
            (args.element as HTMLElement).children[0].className += 'e-day sf-icon-start highlight';
            let span: HTMLElement;
            span = document.createElement('span');
            span.setAttribute('class', 'sf-icons-star highlight');
            // use the imported method to add the multiple classes to the given element
            addClass([args.element as HTMLElement], ['special', 'e-day', 'holiday']);
            (args.element as HTMLElement).setAttribute('data-val', ' Holiday !');
            (args.element as HTMLElement).appendChild(span);
        }
    }
return <CalendarComponent calendarMode={calendarMode} renderDayCell={disableDate} ><Inject services={[Islamic]} /></CalendarComponent>

};
ReactDOM.render(<App />, document.getElementById('element'));


