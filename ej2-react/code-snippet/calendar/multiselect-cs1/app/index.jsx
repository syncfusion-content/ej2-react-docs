// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    //initialize the values
    values = [new Date('1/1/2020'), new Date('1/15/2020'), new Date('1/3/2020'), new Date('1/25/2020')];
    render() {
        return <CalendarComponent id="calendar" isMultiSelection={true} values={this.values}/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
