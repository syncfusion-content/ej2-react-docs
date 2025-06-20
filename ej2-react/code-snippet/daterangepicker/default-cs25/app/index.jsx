// import the daterangepickercomponent
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    startValue = new Date(new Date().setDate(1));
    endValue = new Date(new Date().setDate(20));
    render() {
        return <DateRangePickerComponent id="daterangepicker" format='yyyy-MM-dd' inputFormats={['dd/MM/yyyy', 'yyyyMMdd']} startDate={this.startValue} endDate={this.endValue} placeholder='Select a range'/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
