import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
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
        return <GanttComponent dataSource={data} taskFields={taskFields}
        height = '450px'>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' width='100' hideAtMedia = '(min-width:700px)'></ColumnDirective>
                //  column visibility hide when browser screen width lessthan 700px;
                <ColumnDirective field='TaskName' headerText='Job Name' width='250'></ColumnDirective>
                //  it is always shown;
                <ColumnDirective field='StartDate' hideAtMedia = '(max-width:500px)'></ColumnDirective>
                // column Visibility show when browser screen width  500px or less;
                <ColumnDirective field='Duration' hideAtMedia = '(min-width:500px)'></ColumnDirective>
                //  column visibility hide when browser screen width lessthan 700px;
                <ColumnDirective field='Progress'></ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));