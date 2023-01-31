import * as React from "react";
import * as ReactDOM from "react-dom";
//import the daterangepicker component
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
class App extends React.Component {
    render() {
        return <DateRangePickerComponent id="daterangepicker" format='yyyy-MM-dd' separator='to' placeholder='Select a range'/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
