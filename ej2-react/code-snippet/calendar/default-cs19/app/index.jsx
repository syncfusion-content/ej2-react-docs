{% raw %}
// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    calendarInstance;
    // skips a month while cliking previous and next icon in month view.
    onNavigate(args) {
        let date = 0;
        if (args.event.currentTarget.classList.contains('e-next')) {
            // increment the month while clicking the next icon
            date = args.date.setMonth(args.date.getMonth() + 1);
        }
        if (args.event.currentTarget.classList.contains('e-prev')) {
            // decrement the month while clicking the previous icon
            date = args.date.setMonth(args.date.getMonth() - 1);
        }
        if (args.view === 'month') {
            this.calendarInstance.navigateTo('Month', new Date(date));
        }
    }
    render() {
        return (<CalendarComponent navigated={this.onNavigate = this.onNavigate.bind(this)} ref={(scope) => { this.calendarInstance = scope; }}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}