{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as moment from "moment";
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    calendarInstance;
    constructor(props) {
        super(props);
        this.onchange = this.onchange.bind(this);
        this.onweekChange = this.onweekChange.bind(this);
        this.onworkweekChange = this.onworkweekChange.bind(this);
    }
    onchange(args) {
        const startOfWeek = moment(args.value).startOf('week');
        const endOfWeek = moment(args.value).endOf('week');
        if (this.calendarInstance.element.classList.contains('workweek')) {
            this.getWeekArray(startOfWeek.day(1), endOfWeek.day(5));
        }
        else if (this.calendarInstance.element.classList.contains("week")) {
            this.getWeekArray(startOfWeek, endOfWeek);
        }
    }
    onworkweekChange() {
        if (this.calendarInstance.element.classList.contains('week')) {
            this.calendarInstance.element.classList.remove('week');
        }
        this.calendarInstance.element.classList.add('workweek');
    }
    onweekChange() {
        if (this.calendarInstance.element.classList.contains('workweek')) {
            this.calendarInstance.element.classList.remove('workweek');
        }
        this.calendarInstance.element.classList.add('week');
    }
    getWeekArray(startOfWeek, endOfWeek) {
        const days = [];
        let day = startOfWeek;
        while (day <= endOfWeek) {
            days.push(day.toDate());
            day = day.clone().add(1, 'd');
        }
        this.calendarInstance.values = days;
    }
    render() {
        return (<div id="app">
        <div className="wrap">
         <CalendarComponent id="calendar" isMultiSelection={true} change={this.onchange} ref={(element) => { this.calendarInstance = element; }}/>
        </div>
        <div id="btncontainer" className="e-btn-group e-vertical">
            <ButtonComponent onClick={this.onweekChange} id="week" className="e-btn"> Week </ButtonComponent>
            <ButtonComponent onClick={this.onworkweekChange} id="workweek" className="e-btn"> Work Week </ButtonComponent>
    </div>
  </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}