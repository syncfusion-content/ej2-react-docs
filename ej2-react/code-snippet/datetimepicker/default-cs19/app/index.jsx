// import the datetimepicker component
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    const dateValue=new Date();
    return <DateTimePickerComponent id="datetimepicker" value={dateValue} format='yyyy-MM-dd hh:mm'/>;
}
ReactDOM.render(<App />, document.getElementById('element'));
