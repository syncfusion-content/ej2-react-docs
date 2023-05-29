import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App(){
    const queryCellInfoEvent = (args) => {
        switch(args.data.TaskID) {
            case 1:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan= 2;
            }
            break;
            case 2:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan= 2;
            }
            break;
            case 3:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 4:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 5  :
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 7:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
        }
    }
    const  taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        work1: 'work1',
        work2: 'work2',
    };
    const splitterSettings = {
        position : '75%'
    };
        return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} queryCellInfo={queryCellInfoEvent} splitterSettings={splitterSettings} gridLines='Both' height='450px' ref={gantt => ganttInstance = gantt}>
         <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='work1' headerText='Work 1'></ColumnDirective>
            <ColumnDirective field='work2' headerText='Work 2'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));