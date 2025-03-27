

// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const dateValue:Date=new Date();
    return <DatePickerComponent id="datepicker"  value={dateValue} format='yyyy-MM-dd' inputFormats={['dd/MM/yyyy', 'yyyyMMdd']} placeholder='Enter date' />
};

ReactDOM.render(<App />, document.getElementById('element'));


