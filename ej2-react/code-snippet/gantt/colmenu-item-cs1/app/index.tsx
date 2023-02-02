

import { createElement } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnMenu, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import { ColumnMenuItemModel, Inject, Sort, SortSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    private ganttInstance: any;
    public taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    public columnMenuItems: ColumnMenuItemModel[] =  [{text:'Clear Sorting', id:'ganttclearsorting'}];
    public sortSettings: SortSettingsModel = { columns:[{direction: "Ascending", field: "TaskName"}] };
    public columnMenuClick(args: any){
        if(args.item.id === 'ganttclearsorting'){
            this.clearSorting();
        }
    }

    public splitterSettings: any = {
        columnIndex : 5
    };
    render() {
        return (<div>
        <GanttComponent dataSource={data} taskFields={this.taskFields} showColumnMenu={true}
        columnMenuItems={this.columnMenuItems} columnMenuClick={this.columnMenuClick} sortSettings={this.sortSettings} allowSorting={true}
        splitterSettings={this.splitterSettings} height = '450px' ref={gantt => this.ganttInstance = gantt}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[ColumnMenu, Sort]} />
        </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


