

import { CalendarComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';

function App() {

    // initialize the value
    let dateValue: Date = new Date();

    function disabledDate(args: RenderDayCellEventArgs): void {
        if ((args.date as Date).getDay() === 0 || (args.date as Date).getDay() === 6) {
            // set 'true' to disable the weekends
            args.isDisabled = true;
        }
    }
    return <CalendarComponent id="calendar" renderDayCell={disabledDate} value={dateValue} />
};
ReactDOM.render(<App />, document.getElementById('element'));


