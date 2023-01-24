import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    minDate = new Date('5/5/2019 2:00 AM');
    maxDate = new Date('5/25/2019 2:00 AM');
    dateValue = new Date('5/28/2019 2:00 AM');
    enable = true;
    render() {
        return <DateTimePickerComponent id="datetimepicker" value={this.dateValue} min={this.minDate} strictMode={this.enable} max={this.maxDate}/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
