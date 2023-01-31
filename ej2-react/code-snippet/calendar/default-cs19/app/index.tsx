{% raw %}



// import the calendarcomponent
import { Calendar, CalendarComponent, NavigatedEventArgs } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    public calendarInstance: Calendar;
    // skips a month while cliking previous and next icon in month view.
    public onNavigate(args: NavigatedEventArgs){
        let date: number = 0;
        if (((args.event as KeyboardEvent | MouseEvent | Event).currentTarget as HTMLElement).classList.contains('e-next')) {
            // increment the month while clicking the next icon
            date = (args.date as Date).setMonth((args.date as Date).getMonth() + 1);
        }
        if (((args.event as KeyboardEvent | MouseEvent | Event).currentTarget as HTMLElement).classList.contains('e-prev')) {
            // decrement the month while clicking the previous icon
            date = (args.date as Date).setMonth((args.date as Date).getMonth() - 1);
        }
        if (args.view === 'month') {
            this.calendarInstance.navigateTo('Month', new Date(date));
        }
    }

    public render() {
        return (
            <CalendarComponent navigated={this.onNavigate = this.onNavigate.bind(this)} ref={(scope) => {(this.calendarInstance as Calendar | null) = scope}} />
        );
     }
 }
ReactDOM.render(<App />, document.getElementById('element'));



{% endraw %}