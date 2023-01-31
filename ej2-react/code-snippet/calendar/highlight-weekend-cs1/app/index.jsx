// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    // initialize the value
    dateValue = new Date();
    highlightWeekend(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            // To highlight the week end of every month
            args.element.classList.add('e-highlightweekend');
        }
    }
    render() {
        return <CalendarComponent id="calendar" renderDayCell={this.highlightWeekend} value={this.dateValue}/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
