


import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const minDate: Date =new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0);
    const maxDate: Date =new Date(new Date().getFullYear(), new Date().getMonth(), 27,new Date().getHours(),new Date().getMinutes(),new Date().getSeconds());
    const dateValue: Date = new Date(new Date().setDate(14));

    return <DateTimePickerComponent id="datetimepicker" value={dateValue} min={minDate} strictMode={true} max={maxDate} />;
}
ReactDOM.render(<App />, document.getElementById('element'));


