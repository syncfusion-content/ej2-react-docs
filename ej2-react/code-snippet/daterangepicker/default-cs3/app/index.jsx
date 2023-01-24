// import the daterangepicker component
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    onRenderDayCell(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            // sets isDisabled to true to disable the date.
            args.isDisabled = true;
        }
    }
    render() {
        return <DateRangePickerComponent renderDayCell={this.onRenderDayCell} placeholder='Select a range'/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
