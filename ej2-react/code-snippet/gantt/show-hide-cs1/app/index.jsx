import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function  App(){
    let ganttInstance;
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
   const splitterSettings = {
        columnIndex : 5
    };
    function show() {
        /** show by HeaderText */
        ganttInstance.showColumn(['Duration']);
    }

    function hide(){
        /** hide by HeaderText */
        ganttInstance.hideColumn(['Duration']);
    }
        return (<div>
        <ButtonComponent onClick= { show }>Show</ButtonComponent>
        <ButtonComponent onClick= { hide }>Hide</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={taskFields}
        splitterSettings={splitterSettings} height = '450px'
        ref={gantt => ganttInstance = gantt}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration' headerText='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));