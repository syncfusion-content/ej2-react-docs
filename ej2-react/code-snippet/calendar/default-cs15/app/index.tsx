


// import the calendarcomponent
import { CalendarComponent} from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {

    //initialize the value, min and max
    private dateValue: Date = new Date("05/11/2017");
    private minDate: Date = new Date("05/09/2017");
    private maxDate: Date = new Date("05/15/2017");

    public render() {
        return <CalendarComponent id="calendar" value={this.dateValue} min={this.minDate} max={this.maxDate} />
    }
};
ReactDOM.render(<App />, document.getElementById('element'));


