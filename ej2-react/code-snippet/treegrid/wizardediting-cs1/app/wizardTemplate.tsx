import { DataUtil } from '@syncfusion/ej2-data';
import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { projectData as orderData } from './datasource';
import { IProjectModel } from './projectModel';

export class DialogFormTemplate extends React.Component<{}, {}> {
    public currentTab: number = 1;
    private priorityData: any = DataUtil.distinct(orderData, 'Priority', true );
    private treegrid: TreeGrid | null;
    constructor(props: any) {
        super(props);
        this.state = Object.assign({}, props[0]);
        Object.assign(this.state, {currentTab: 1 })
        this.treegrid = props[1];
    }

    public onChange(args: React.ChangeEvent) {
        this.setState({[(args.target as HTMLInputElement).name]: (args.target as HTMLInputElement).value});
    }

    public next(args: any) {
        let valid: boolean = true;
        [].slice.call((document.getElementById('tab' + this.currentTab) as HTMLElement)
            .querySelectorAll('[name]')).forEach((element: any) => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true'){
                valid = false;
            }
        });
        if (!valid) {
          return
        }
        if (args.target.innerHTML !== 'SUBMIT'){
            this.setState({currentTab: 2});
        } else {
            if (this.treegrid) {
                this.treegrid.endEdit();
            }
        }
    }
    
    public previous() {
        let valid: boolean = true;
        [].slice.call((document.getElementById('tab' + this.currentTab) as HTMLElement)
            .querySelectorAll('[name]')).forEach((element: any) => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true'){
                valid = false;
            }
        });
        if (!valid) {
          return
        }
        this.setState({currentTab: 1});
    }

    public render(): any {
        this.onChange = this.onChange.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        const data: IProjectModel = this.state;
        const styTab1: object = {
            'display': data.currentTab === 1 ? 'block' : 'none'
        }
        const styTab2: object = {
            'display': data.currentTab === 2 ? 'block' : 'none'
        }
        return (<div>
            <div id='tab1' style={styTab1}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="e-float-input e-control-wrapper">
                            <input id="TaskID" name="TaskID" type="text" disabled={!data.isAdd} value={data.TaskID} onChange={this.onChange} />
                            <span className="e-float-line"/>
                            <label className="e-float-text e-label-top"> Task ID</label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="e-float-input e-control-wrapper" >
                            <input value={data.TaskName} id="TaskName" name="TaskName" type="text" onChange={this.onChange} />
                            <span className="e-float-line"/>
                            <label className="e-float-text e-label-top">Task Name</label>
                        </div>
                    </div>
                </div>
            </div>
            <div id='tab2' style={styTab2}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <NumericTextBoxComponent id="Duration" value={data.Duration} placeholder="Duration" floatLabelType='Always'/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <DropDownListComponent id="Priority" value={data.Priority} dataSource={this.priorityData}
                        fields={{text: 'Priority', value: 'Priority' }} placeholder="Priority"
                        popupHeight='300px' floatLabelType='Always'/>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <button id="prevBtn" className={data.currentTab === 1 ? 'e-info e-btn e-hide' : 'e-info e-btn'} type="button" style={{float: "left"}} onClick={this.previous}>Previous</button>
            
                <button id="nextBtn" className="e-info e-btn" type="button" style={{float: "right"}} onClick={this.next}>{data.currentTab === 1 ? 'Next' : 'SUBMIT'}</button>
            </div>
        </div>);
    }
}
