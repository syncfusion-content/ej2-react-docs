

// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// creates a datepicker with decade view and navigate up to year view.
function App() {
    return <DatePickerComponent id="datepicker" start="Decade" depth="Year" placeholder="Enter date"/>;
}
ReactDOM.render(<App />, document.getElementById('element'));


