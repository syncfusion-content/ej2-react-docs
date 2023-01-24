import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    start = new Date("10/7/2017");
    end = new Date("11/15/2017");
    render() {
        return <DateRangePickerComponent id="daterangepicker" placeholder='Select a range' startDate={this.start} endDate={this.end}/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
