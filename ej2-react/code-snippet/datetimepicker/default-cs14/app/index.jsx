import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    const minDate = new Date('5/5/2019 2:00 AM');
    const maxDate = new Date('5/25/2019 2:00 AM');
    const dateValue = new Date('5/28/2019 2:00 AM');
    const enable = true;
    return <DateTimePickerComponent id="datetimepicker" value={dateValue} min={minDate} strictMode={enable} max={maxDate}/>;
}
ReactDOM.render(<App />, document.getElementById('element'));
