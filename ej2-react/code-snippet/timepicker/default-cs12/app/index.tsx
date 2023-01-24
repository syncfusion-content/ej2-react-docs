

// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

// enable ripple effect
enableRipple(true);

function App() {

    // initialize the min and max time value
    const minTime: Date = (new Date('8/3/2017 9:00 AM'));
    const maxTime: Date = (new Date('8/3/2017 11:30 AM'));
    return <TimePickerComponent id="timepicker" placeholder="Select a Time" min={minTime} max={maxTime} />
};
ReactDOM.render(<App />, document.getElementById('timer'));


