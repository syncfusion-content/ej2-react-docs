// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // initialize the value
    dateValue = new Date();
    disabledDate(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            // set 'true' to disable the weekends
            args.isDisabled = true;
        }
    }
    render() {
        return <CalendarComponent id="calendar" renderDayCell={this.disabledDate} value={this.dateValue}/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
