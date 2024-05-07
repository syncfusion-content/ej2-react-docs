{% raw %}
// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    calendarObj;
    floatLabelObj;
    floatData;
    fields;
    value = 'Short';
    constructor(props) {
        super(props);
        this.floatData = [
            { Id: 'Short', Label: 'Short' },
            { Id: 'Narrow', Label: 'Narrow' },
            { Id: 'Abbreviated', Label: 'Abbreviated' },
            { Id: 'Wide', Label: 'Wide' }
        ];
        this.fields = { text: 'Label', value: 'Id' };
    }
    formatHandler(args) {
        this.calendarObj.dayHeaderFormat = args.value;
    }
    render() {
        return (<div id="container">
            <div id="calendar">
                <CalendarComponent ref={(calendar) => this.calendarObj = calendar} dayHeaderFormat="Short"/>
            </div>
            <div id="format">
                <label class="custom-input-label">Header Format Types</label>
                <DropDownListComponent id="select" value={this.value} dataSource={this.floatData} ref={(dropdownlist) => { this.floatLabelObj = dropdownlist; }} fields={this.fields} change={this.formatHandler.bind(this)} placeholder="Select float type"/>
            </div>
         </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}