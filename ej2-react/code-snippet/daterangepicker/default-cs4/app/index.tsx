

// import the daterangepicker component
import { DateRangePickerComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    function onRenderDayCell(args: RenderDayCellEventArgs): void {
        if ((args.date as Date).getDay() === 0 || (args.date as Date).getDay() === 6) {
            // sets isDisabled to true to disable the date.
            args.isDisabled = true;
        }
    }
    return <DateRangePickerComponent renderDayCell={onRenderDayCell} placeholder='Select a range' />
};
ReactDOM.render(<App />, document.getElementById('element'));


