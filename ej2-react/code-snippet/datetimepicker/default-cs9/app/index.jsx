// import the datetimepicker component
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // initialize the value, min and max
    minDate = new Date("11/22/2019 12:00 PM");
    maxDate = new Date("11/25/2019 5:00 PM");
    render() {
        return <DateTimePickerComponent id="datetimepicker" min={this.minDate} max={this.maxDate}/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
