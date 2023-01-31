

import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    const start:Date= new Date("10/7/2017");
    const end:Date= new Date("11/15/2017");
    return <DateRangePickerComponent id="daterangepicker" placeholder='Select a range' startDate={start} endDate={end} />
};
ReactDOM.render(<App />, document.getElementById('element'));


