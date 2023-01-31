


// import the datetimepickercomponent
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    public render() {
        return <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time"/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));


