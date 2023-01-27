

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Resize, Sort, Filter, Edit, Reorder } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

    class App extends React.Component<{}, {}>{
        public taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    public splitterSettings: any = {
        position : '90%'
    };
    public editSettings: any = {
        allowEditing : true
    };
    render() {
        return (<div>
        <GanttComponent dataSource={data} taskFields={this.taskFields} splitterSettings={this.splitterSettings} height='450px' allowSorting={true} allowFiltering={true} allowReordering={true} editSettings={this.editSettings}
        ref={gantt => this.ganttInstance = gantt}>
         <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name' allowSorting= {false}></ColumnDirective>
            <ColumnDirective field='StartDate' allowEditing= {false}></ColumnDirective>
            <ColumnDirective field='Duration' allowFiltering= {false}></ColumnDirective>
            <ColumnDirective field='Progress' allowReordering= {false}></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Reorder, Edit]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));


