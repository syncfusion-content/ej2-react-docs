{% raw %}
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    let datetimepickerInstance;
    React.useEffect(() => {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                proxy.datetimepickerInstance.focusIn();
            }
        };
    }, []);
    return <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time" ref={(scope) => { datetimepickerInstance = scope; }}/>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}