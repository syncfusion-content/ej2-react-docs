

import { ColumnDirective, ColumnsDirective, TreeGridComponent, DetailRow, Inject } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { textdata } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

let instance: Internationalization = new Internationalization();

interface DateFormat extends Window {
    format?: Function;
}

export default class App extends React.Component<{}, {}>{
    public format = (value: Date) => {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }

 public detailtemplate(props): any {
        var imag = './' + props.FullName + '.png';
        return (
            <div>
                <div style={{ position: 'relative', display: 'inline-block', float: 'left', padding: '5px 4px 2px 27px' }} >
                    <img src={imag} />
                </div>
                <div style={{ paddingLeft: '10px', display: 'inline-block', width: '66%', fontSize: '13px', fontFamily: 'Segoe UI' }}>
                    <div className="e-description" style={{ marginTop: '5px' }}>
                        <b>{props.Name}</b> was born on {this.format(props.DOB)}. Now lives at {props.Address}, {props.Country}. {props.Name} holds a position of <b>{props.Designation}</b> in our WA department, (Seattle USA).</div>
                    <div className="e-description" style={{ marginTop: '5px' }}>
                        <b style={{ marginRight: '10px' }}>Contact:</b>{props.Contact}
                    </div>
                </div>
            </div>
        );
    }
    public template: any = this.detailtemplate;
    render() {
        return (
            <div className='control-pane'>
                <div className='control-section'>
                    <TreeGridComponent dataSource={textdata} childMapping='Children' detailTemplate={this.template.bind(this)} treeColumnIndex={0}>
                        <ColumnsDirective>
                            <ColumnDirective headerText='Full Name' width='170' field='Name'></ColumnDirective>
                            <ColumnDirective field='Designation' headerText='Designation' width='180'></ColumnDirective>
                            <ColumnDirective field='EmpID' headerText='EmployeeID' width='110'></ColumnDirective>
                            <ColumnDirective field='Country' headerText='Country' width='90'></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[DetailRow]} />
                    </TreeGridComponent>
                </div>
            </div>
        )
    }
}
