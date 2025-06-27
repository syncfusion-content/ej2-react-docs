


// import the daterangepickercomponent
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    private startValue: Date = new Date(new Date().setDate(1));
    private endValue: Date = new Date(new Date().setDate(20))
    public render() {
        return <DateRangePickerComponent id="daterangepicker" format='yyyy-MM-dd' startDate={this.startValue} endDate={this.endValue} placeholder='Select a range' />
    }
};

ReactDOM.render(<App />, document.getElementById('element'));


