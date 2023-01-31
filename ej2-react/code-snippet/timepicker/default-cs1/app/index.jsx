// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
// enable ripple effect
enableRipple(true);
export default class App extends React.Component {
    render() {
        return <TimePickerComponent id="timepicker" placeholder="Select a Time"/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('timer'));
