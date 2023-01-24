// import the daterangepicker component
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    startDay = 1;
    render() {
        return <DateRangePickerComponent firstDayOfWeek={this.startDay} placeholder='Select a range'/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
