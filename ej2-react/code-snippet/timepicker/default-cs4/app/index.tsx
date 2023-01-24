

// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
// enable ripple effect
enableRipple(true);

function App() {

    // initialize the value, min and max time
    const time: Date = (new Date('8/3/2017 10:00 AM'));
    const minTime: Date = (new Date('8/3/2017 7:00 AM'));
    const maxTime: Date = (new Date('8/3/2017 4:00 PM'));
    return <TimePickerComponent id="timepicker" value={time} min={minTime} max={maxTime} />
};
ReactDOM.render(<App />, document.getElementById('timer'));


