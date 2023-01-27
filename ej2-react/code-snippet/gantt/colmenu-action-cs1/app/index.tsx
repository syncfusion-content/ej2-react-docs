

import { createElement } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnMenu, ColumnDirective, ColumnsDirective, ColumnMenuOpenEventArgs } from '@syncfusion/ej2-react-gantt';
import { ColumnMenuItemModel, Inject, Sort, Filter } from '@syncfusion/ej2-react-gantt';
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
    public columnMenuOpen (args: ColumnMenuOpenEventArgs) {
        for (const item of args.items) {
            if (item.text === 'Filter' && (args.column as Column).field === 'TaskName') {
                (item as ColumnMenuItemModel).hide = true;
            } else {
                (item as ColumnMenuItemModel).hide = false;
            }
        }
    }

    public splitterSettings: any = {
        columnIndex : 5
    };
    render() {
        return (<div>
        <GanttComponent dataSource={data} taskFields={this.taskFields} showColumnMenu={true}
        columnMenuItems={this.columnMenuItems} columnMenuClick={this.columnMenuClick}  columnMenuOpen={this.columnMenuOpen} allowFiltering={true} allowSorting={true}
        splitterSettings={this.splitterSettings} height = '450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[ColumnMenu, Sort, Filter]} />
        </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


