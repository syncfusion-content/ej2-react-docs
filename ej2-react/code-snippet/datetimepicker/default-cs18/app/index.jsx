import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    const minTime = new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0);
    const maxTime = new Date(new Date().getFullYear(), new Date().getMonth(), 27, 20, 30, 0);
    const dateValue = new Date(new Date().setDate(14));
    return <DateTimePickerComponent id="datetimepicker" value={dateValue} minTime={minTime} strictMode={true} maxTime={maxTime}/>;
}
ReactDOM.render(<App />, document.getElementById('element'));
