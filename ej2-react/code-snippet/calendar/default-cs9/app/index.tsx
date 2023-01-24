

// import the calendarcomponent
import { CalendarComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    // initialize the value
    private dateValue: Date = new Date();

    public disabledDate(args: RenderDayCellEventArgs): void {
        if ((args.date as Date).getDay() === 0 || (args.date as Date).getDay() === 6) {
            // set 'true' to disable the weekends
            args.isDisabled = true;
        }
    }

    public render() {
        return <CalendarComponent id="calendar" renderDayCell={this.disabledDate} value={this.dateValue} />
    }
};
ReactDOM.render(<App />, document.getElementById('element'));


