// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
// enable ripple effect
enableRipple(true);
function App() {
    const time = (new Date('8/3/2017 10:00'));
    return <TimePickerComponent id="timepicker" value={time} step={60} format={'HH:mm'}/>;
}
;
ReactDOM.render(<App />, document.getElementById('timer'));
