// import the daterangepickercomponent
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    const startValue = new Date(new Date().setDate(1));
    const endValue = new Date(new Date().setDate(20));
    return <DateRangePickerComponent id="daterangepicker" format='yyyy-MM-dd' inputFormats={['dd/MM/yyyy', 'yyyyMMdd']} startDate={startValue} endDate={endValue} placeholder='Select a range'/>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
