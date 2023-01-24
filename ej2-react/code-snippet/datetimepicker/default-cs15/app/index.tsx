


import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    private minDate: Date =new Date('5/5/2019 2:00 AM');
    private  maxDate: Date =new Date('5/25/2019 2:00 AM');
    private  dateValue: Date = new Date('5/28/2019 2:00 AM');
    private  enable: boolean = false;

    public render() {
        return <DateTimePickerComponent id="datetimepicker" value={this.dateValue} min={this.minDate} strictMode={this.enable} max={this.maxDate} placeholder='Select a date and time' />;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));


