

// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // creates a datepicker with min and max property
    const minDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 7);
    const maxDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 27);
    const dateValue: Date = new Date(new Date().setDate(14));

    return <DatePickerComponent id="datepicker" value={dateValue} min={minDate} max={maxDate} />;
}
ReactDOM.render(<App />, document.getElementById('element'));


