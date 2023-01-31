// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // initialize the value, min and max
    const dateValue = new Date('05/11/2017');
    const minDate = new Date('05/09/2017');
    const maxDate = new Date('05/15/2017');
    return <DatePickerComponent id="datepicker" value={dateValue} min={minDate} max={maxDate}/>;
}
ReactDOM.render(<App />, document.getElementById('element'));
