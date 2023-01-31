


// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
// enable ripple effect
enableRipple(true);

export default class App extends React.Component<{}, {}> {

    private time: Date = (new Date('8/3/2017 10:00'));

    public render() {
        return <TimePickerComponent id="timepicker" value={this.time} step={60} format={'HH:mm'} />
    }
};
ReactDOM.render(<App />, document.getElementById('timer'));


