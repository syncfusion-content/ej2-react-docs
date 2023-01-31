{% raw %}



// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the timepicker
import { TimePicker, TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

// enable ripple effect
enableRipple(true);

export default class App extends React.Component<{}, {}> {

    private timepickerInstance: TimePicker;

    public componentDidMount() {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                 proxy.timepickerInstance.focus();
            }
        };
    }

    public render() {
        return <TimePickerComponent id="timepicker" placeholder="Select a Time" ref={(scope) => { (this.timepickerInstance as TimePicker | null)  = scope; }}/>
    }
};
ReactDOM.render(<App />, document.getElementById('timer'));


{% endraw %}