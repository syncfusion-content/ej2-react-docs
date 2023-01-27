import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnMenu, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import { Inject, Sort, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    columnMenuOpen(args) {
        for (const item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'TaskName') {
                item.hide = true;
            }
            else {
                item.hide = false;
            }
        }
    }
    splitterSettings = {
        columnIndex: 5
    };
    render() {
        return (<div>
        <GanttComponent dataSource={data} taskFields={this.taskFields} showColumnMenu={true} columnMenuItems={this.columnMenuItems} columnMenuClick={this.columnMenuClick} columnMenuOpen={this.columnMenuOpen} allowFiltering={true} allowSorting={true} splitterSettings={this.splitterSettings} height='450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100'></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[ColumnMenu, Sort, Filter]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
