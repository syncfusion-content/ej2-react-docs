{% raw %}
// import the daterangepickercomponent
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    daterangepickerObj;
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
        this.daterangepickerObj.dayHeaderFormat = args.value;
    }
    render() {
        return (<div id='container'>
            <div id='daterangepicker'>
                <DateRangePickerComponent ref={(daterangepicker) => this.daterangepickerObj = daterangepicker} cssClass="format-wide" dayHeaderFormat="Short"/>
            </div>
            <div id="format">
                    <label className="custom-input-label">Header Format Types</label>
                <DropDownListComponent id="select" value={this.value} dataSource={this.floatData} ref={(dropdownlist) => { this.floatLabelObj = dropdownlist; }} fields={this.fields} change={this.formatHandler.bind(this)}/>
            </div>
          </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}