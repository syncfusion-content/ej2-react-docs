


// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    public render() {
        return <DatePickerComponent id="datepicker" placeholder="Enter date" value={new Date()} serverTimezoneOffset={5.5}/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));


