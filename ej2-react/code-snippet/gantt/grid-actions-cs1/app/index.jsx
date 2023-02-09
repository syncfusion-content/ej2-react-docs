import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Resize, Sort, Filter, Edit, Reorder } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

    function App(){
        const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    const splitterSettings = {
        position : '90%'
    };
    let ganttInstance;
    const editSettings = {
        allowEditing : true
    };
        return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} splitterSettings={splitterSettings} height='450px' allowSorting={true} allowFiltering={true} allowReordering={true} editSettings={editSettings}
        ref={gantt => ganttInstance = gantt}>
         <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name' allowSorting= {false}></ColumnDirective>
            <ColumnDirective field='StartDate' allowEditing= {false}></ColumnDirective>
            <ColumnDirective field='Duration' allowFiltering= {false}></ColumnDirective>
            <ColumnDirective field='Progress' allowReordering= {false}></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Reorder, Edit]}/>
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));