


// import the datepickercomponent
import { DatePickerComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    public onRenderDayCell(args: RenderDayCellEventArgs): void {
        if ((args.date as Date).getDay() === 0 || (args.date as Date).getDay() === 6) {
            // sets isDisabled to true to disable the date.
            args.isDisabled = true;
            // To know about the disabled date customization, you can refer in "styles.css".
        }
    }

    public render() {
        return (
            // specifies the tag for render the DatePicker component
            <DatePickerComponent id="datepicker" cssClass="e-custom-style" renderDayCell={this.onRenderDayCell} placeholder="Enter date"/>
        );
     }
 }
ReactDOM.render(<App />, document.getElementById('element'));


