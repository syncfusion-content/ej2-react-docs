{% raw %}



import { Calendar, CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {

    private calendarInstance: Calendar;

    public componentDidMount() {
        const proxy = this;
        document.onkeyup = (e: KeyboardEvent) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press altt to focus the control.
                (proxy.calendarInstance.element.querySelector('table') as HTMLElement).focus();
            }
        };
    }

    public render() {
        return (
            // specifies the tag for render the Calendar component
            <CalendarComponent id="calendar" ref={(scope) => { (this.calendarInstance as Calendar | null) = scope; }}  />
        );
    }

 }

ReactDOM.render(<App />, document.getElementById('element'));



{% endraw %}