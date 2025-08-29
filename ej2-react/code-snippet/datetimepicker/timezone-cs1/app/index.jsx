// import the datetimepickercomponent
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    return <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time" serverTimezoneOffset={5.5}/>;
}
ReactDOM.render(<App />, document.getElementById('element'));
