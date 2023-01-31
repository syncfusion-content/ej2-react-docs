// import the datetimepicker component
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // initialize the value, min and max
    const minDate = new Date("11/22/2019 12:00 PM");
    const maxDate = new Date("11/25/2019 5:00 PM");
    return <DateTimePickerComponent id="datetimepicker" min={minDate} max={maxDate}/>;
}
ReactDOM.render(<App />, document.getElementById('element'));
