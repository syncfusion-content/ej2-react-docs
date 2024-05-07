


// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    public render() {
        return <CalendarComponent id="calendar" />
    }
};
ReactDOM.render(<App />, document.getElementById('element'));


