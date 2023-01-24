

// import the daterangepicker component
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {

    // creates a daterangepicker with min and max property
    const minDate:Date= new Date(new Date().getFullYear(), new Date().getMonth(), 15);
    const  maxDate:Date= new Date(new Date().getFullYear(), new Date().getMonth()+1, 15);

    return <DateRangePickerComponent id="daterangepicker" placeholder='Select a range' min={minDate} max={maxDate} />
};
ReactDOM.render(<App />, document.getElementById('element'));


