import { TabComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { IProjectModel } from './projectModel';

export class TabOneComponent extends React.Component<{}, {}> {
    public tab: TabComponent | null;
    constructor(props: any) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.tab = props[1];
    }

    public onChange(args: React.ChangeEvent) {
        this.setState({[(args.target as HTMLInputElement).name]: (args.target as HTMLInputElement).value});
    }

    public next() {
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
        if (this.tab) {
            this.tab.select(1);
        }
    }

    public render(): any {
        this.onChange = this.onChange.bind(this);
        this.next = this.next.bind(this);
        const data: IProjectModel = this.state;
        return (<div id='tab1'>
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
        <div id='footer'> 
            <button id="nextBtn" className='e-info e-btn' type="button" style={{float: "right"}} onClick={this.next}>Next</button>
        </div>
    </div>);
    }
}