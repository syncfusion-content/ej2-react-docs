


// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// creates a datepicker with strictMode property
export default class App extends React.Component<{}, {}> {

     // sets the value
    private dateValue:Date= new Date('5/28/2017');
    // sets the min
    private minDate:Date= new Date('5/5/2017');
    // sets the max
    private maxDate:Date= new Date('5/25/2017');
    private disable: boolean = true;

    public render() {
        return <DatePickerComponent id="datepicker" strictMode={this.disable} format="dd/MM/yyyy" value={this.dateValue} min={this.minDate} max={this.maxDate}  placeholder="Enter date" />
    }
};
ReactDOM.render(<App />, document.getElementById('element'));


