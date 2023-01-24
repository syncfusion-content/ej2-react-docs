{% raw %}
// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    datepickerObj;
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
        this.datepickerObj.dayHeaderFormat = args.value;
    }
    render() {
        return (
        // specifies the tag for render the DatePicker component
        <div id='container'>
                <div id='datepicker'>
                    <DatePickerComponent ref={(datepicker) => this.datepickerObj = datepicker} dayHeaderFormat="Short"/>
                </div>
                <div id="format">
                     <label className="custom-input-label">Header Format Types</label>
                    <DropDownListComponent id="select" value={this.value} dataSource={this.floatData} ref={(dropdownlist) => { this.floatLabelObj = dropdownlist; }} fields={this.fields} change={this.formatHandler.bind(this)}/>
            </div>
          </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}