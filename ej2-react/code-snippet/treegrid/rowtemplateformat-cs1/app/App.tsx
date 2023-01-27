{% raw %}


import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
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
    public treegridTemplate(props): any {
        var src = './' + props.FullName + '.png';
        return (<tr>
            <td className="border"  style={{paddingLeft:'18px'}}>
                <div>{props.EmpID}</div>
            </td>
            <td className="border">
                <div>
                    <div style={{position:'relative' , display:'inline-block'}}>
                        <img src ={src} />
                    </div>
                    <div style={{display:'inline-block'}}>
                        <div style={{padding:'5px'}}>{props.Address}</div>
                        <div style={{padding:'5px'}}>{props.Country}</div>
                        <div style={{padding:'5px' ,fontSize: '12px'}}>{props.Contact}</div>
                    </div>
                </div>
            </td>
            <td className="border" style={{paddingLeft:'20px'}}>
                <div>{this.format(props.DOB)}</div>
            </td>
    </tr>);
    }
    public template: any = this.treegridTemplate;
    public render() {
        return <TreeGridComponent dataSource={textdata} childMapping = 'Children' rowTemplate={this.template.bind(this)} treeColumnIndex={0} rowHeight = '83' height='291'>
                <ColumnsDirective>
                <ColumnDirective headerText = 'Employee ID' width = '180' field = 'EmpID'></ColumnDirective>
                <ColumnDirective headerText = 'Employee Details' width = '350' field = 'Address'></ColumnDirective>
                <ColumnDirective headerText = 'DOB' width = '150' field = 'DOB'></ColumnDirective>
                </ColumnsDirective>
                </TreeGridComponent>
    }
}


{% endraw %}