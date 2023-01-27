

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            verified: 'verified'
        };
    }
    public splitterSettings: any = {
        position : '80%'
    };
    render() {
        return (<div>
        <GanttComponent dataSource={data} taskFields={this.taskFields} splitterSettings={this.splitterSettings} height='450px' ref={gantt => this.ganttInstance = gantt}>
         <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='verified' headerText= 'Verified' type= 'boolean' displayAsCheckBox= {true}></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));


