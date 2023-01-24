{% raw %}



import { DateTimePicker, DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    private datetimepickerInstance: DateTimePicker;
    public componentDidMount() {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                 proxy.datetimepickerInstance.focusIn();
            }
        };
     }

    public render() {
        return <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time" ref={(scope) => { (this.datetimepickerInstance as DateTimePicker | null) = scope; }}/>
    }
};
ReactDOM.render(<App />, document.getElementById('element'));


{% endraw %}