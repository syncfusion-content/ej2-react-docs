import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID',
            verified: 'verified'
        };
   let ganttInstance:any;
   const  splitterSettings: any = {
        position : '80%'
    };
        return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} splitterSettings={splitterSettings} height='450px' ref={gantt => ganttInstance = gantt}>
         <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='verified' headerText= 'Verified' type= 'boolean' displayAsCheckBox= {true}></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));