// import the daterangepicker component
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    const startDay = 1;
    return <DateRangePickerComponent firstDayOfWeek={startDay} placeholder='Select a range'/>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
