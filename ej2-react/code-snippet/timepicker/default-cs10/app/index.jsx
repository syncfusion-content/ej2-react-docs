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
    const minTime = new Date('8/3/2017 10:00 AM');
    const maxTime = new Date('8/3/2017 4:00 PM');
    const time = new Date('8/3/2017 8:00 PM');
    return <TimePickerComponent id="timepicker" value={time} placeholder="Select a Time" min={minTime} max={maxTime} strictMode={false}/>;
}
;
ReactDOM.render(<App />, document.getElementById('timer'));
