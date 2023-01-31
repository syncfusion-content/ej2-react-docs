// import the datetimepickercomponent
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    return <DateTimePickerComponent id="datetimepicker" floatLabelType="Auto" placeholder="Select a date and time"/>;
}
ReactDOM.render(<App />, document.getElementById('element'));
