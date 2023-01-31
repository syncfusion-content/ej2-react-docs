// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// creates a datepicker with year view.
export default class App extends React.Component {
    render() {
        return <DatePickerComponent id="datepicker" start="Decade" placeholder="Enter date"/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
