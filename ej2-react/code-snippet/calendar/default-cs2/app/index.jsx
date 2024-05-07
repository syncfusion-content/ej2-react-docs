{% raw %}
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    let calendarInstance;
    React.useEffect(() => {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press altt to focus the control.
                proxy.calendarInstance.element.querySelector('table').focus();
            }
        };
    }, []);
    return (
    // specifies the tag for render the Calendar component
    <CalendarComponent id="calendar" ref={(scope) => { calendarInstance = scope; }}/>);
}
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}