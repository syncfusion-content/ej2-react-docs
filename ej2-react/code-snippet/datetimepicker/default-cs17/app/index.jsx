import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    minTime = new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0);
    maxTime = new Date(new Date().getFullYear(), new Date().getMonth(), 27, 20, 30, 0);
    dateValue = new Date(new Date().setDate(14));
    render() {
        return <DateTimePickerComponent id="datetimepicker" value={this.dateValue} minTime={this.minTime} strictMode={true} maxTime={this.maxTime}/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
