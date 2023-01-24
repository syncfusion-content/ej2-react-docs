// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    // creates a calendar with min and max property
    minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 7);
    maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 27);
    dateValue = new Date(new Date().setDate(14));
    render() {
        return <CalendarComponent id="calendar" value={this.dateValue} min={this.minDate} max={this.maxDate}/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
