{% raw %}



import { DatePicker, DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    private datepickerInstance: DatePicker;

    public componentDidMount() {
        const proxy: any = this;
        this.datepickerInstance.placeholder = 'Enter Date';
        this.datepickerInstance.dataBind();
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                 proxy.datepickerInstance.focusIn();
            }
        };
    }

    public render() {
        return (
            // specifies the tag for render the DatePicker component
            <DatePickerComponent id="datepicker" ref={(scope) => { (this.datepickerInstance as DatePicker | null) = scope; }} />
        );
     }
 };
ReactDOM.render(<App />, document.getElementById('element'));


{% endraw %}