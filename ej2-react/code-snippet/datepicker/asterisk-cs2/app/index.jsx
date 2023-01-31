// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    return <DatePickerComponent id="datepicker" floatLabelType="Auto" placeholder="Enter date"/>;
}
ReactDOM.render(<App />, document.getElementById('element'));
