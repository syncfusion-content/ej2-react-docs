


import { DateTimePickerComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    public onRenderCell(args: RenderDayCellEventArgs): void {
        if ((args.date as Date).getDay() === 0 || (args.date as Date).getDay() === 6) {
            // sets isDisabled to true to disable the date.
            args.isDisabled = true;
        }
     }

    public render() {
        return <DateTimePickerComponent id="datetimepicker" renderDayCell={this.onRenderCell} placeholder="Select a date and time"/>
    }
};
ReactDOM.render(<App />, document.getElementById('element'));


