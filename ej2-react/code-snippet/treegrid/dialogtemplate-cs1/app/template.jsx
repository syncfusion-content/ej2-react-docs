{% raw %}
import { DataUtil } from '@syncfusion/ej2-data';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { sampleData as orderData } from './datasource';
export class DialogFormTemplate extends React.Component {
    priorityData = DataUtil.distinct(orderData, 'priority', true);
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
    }
    onChange(args) {
        this.setState({ [args.target.name]: args.target.value });
    }
    render() {
        this.onChange = this.onChange.bind(this);
        const data = this.state;
        return (<div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper">
                        <input id="taskID" name="taskID" disabled={!data.isAdd} type="text" value={data.taskID} onChange={this.onChange}/>
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top">Task ID</label>
                    </div>

                </div>
                <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper">
                        <input id="taskName" name="taskName" type="text" value={data.taskName} onChange={this.onChange}/>
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top">Task Name</label>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <DropDownListComponent id="priority" value={data.priority} dataSource={this.priorityData} fields={{ text: 'priority', value: 'priority' }} placeholder="Priority" popupHeight='300px' floatLabelType='Always'/>
                </div>
                <div className="form-group col-md-6">
                   <NumericTextBoxComponent id="progress" format='n' value={data.progress} placeholder="Progress" floatLabelType='Always'/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper">
                        <DatePickerComponent value={data.startDate} floatLabelType='Always' placeholder="Start Date"/>
                        <span className="e-float-line"/>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper">
                    <DatePickerComponent value={data.endDate} floatLabelType='Always' placeholder="End Date"/>
                        <span className="e-float-line"/>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper">
                    <CheckBoxComponent checked={data.approved} label='Approved'/>
                        <span className="e-float-line"/>
                    </div>
                </div>
            </div>
        </div>);
    }
}
{% endraw %}