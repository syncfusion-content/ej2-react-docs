import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0);
    maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 27, new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
    dateValue = new Date(new Date().setDate(14));
    render() {
        return <DateTimePickerComponent id="datetimepicker" value={this.dateValue} min={this.minDate} strictMode={true} max={this.maxDate}/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
