// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
// enable ripple effect
enableRipple(true);
export default class App extends React.Component {
    // initialize the value, min and max time
    time = (new Date('8/3/2017 10:00 AM'));
    minTime = (new Date('8/3/2017 7:00 AM'));
    maxTime = (new Date('8/3/2017 4:00 PM'));
    render() {
        return <TimePickerComponent id="timepicker" value={this.time} min={this.minTime} max={this.maxTime}/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('timer'));
