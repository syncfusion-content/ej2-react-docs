// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// creates a datepicker with strictMode property
function App() {
    // sets the value
    const dateValue = new Date('5/28/2017');
    // sets the min
    const minDate = new Date('5/5/2017');
    // sets the max
    const maxDate = new Date('5/25/2017');
    const disable = true;
    return <DatePickerComponent id="datepicker" strictMode={disable} format="dd/MM/yyyy" value={dateValue} min={minDate} max={maxDate} placeholder="Enter date"/>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
