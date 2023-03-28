import { DataUtil } from '@syncfusion/ej2-data';
import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { projectData as orderData } from './datasource';
import { IProjectModel } from './projectModel';

export class TabTwoComponent extends React.Component<{}, {}> {
    private priorityData: any = DataUtil.distinct(orderData, 'Priority', true );
    private treegrid: TreeGrid | null;
    constructor(props: any) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.treegrid = props[2];
    }

    public onChange(args: React.ChangeEvent) {
        this.setState({[(args.target as HTMLInputElement).name]: (args.target as HTMLInputElement).value});
    }

    public submit() {
        let valid: boolean = true;
        [].slice.call((document.getElementById('tab1') as HTMLElement).querySelectorAll('[name]'))
            .forEach((element: any) => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true'){
                valid = false;
            }
        });
        if (!valid) {
        return
        }
        if (this.treegrid) {
            this.treegrid.endEdit();
        }
    }

    public render(): any {
        this.submit = this.submit.bind(this);
        const data: IProjectModel = this.state;
        return (<div id='tab2'>
        <div className="form-row">
            <div className="form-group col-md-6">
                <NumericTextBoxComponent id="Duration" format='C2' value={data.Duration} placeholder="Duration" floatLabelType='Always'/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <DropDownListComponent id="Priority" value={data.Priority} dataSource={this.priorityData}
                fields={{text: 'Priority', value: 'Priority' }} placeholder="Priority"
                popupHeight='300px' floatLabelType='Always'/>
            </div>
        </div>
        <div id='footer'>   
            <button id="submitBtn" className="e-info e-btn" type="button" style={{float: "right"}} onClick={this.submit}>SUBMIT</button>
        </div>
    </div>);
    }
}

