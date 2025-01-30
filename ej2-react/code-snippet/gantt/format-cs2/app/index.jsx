import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App () {
   const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
  const  splitterSettings = {
        columnIndex: 4
    };
  const  formatOption = { type: 'date', format: 'dd.MM.yyyy' };
  
        return <GanttComponent dataSource={data} taskFields={taskFields} splitterSettings={splitterSettings} height='450px'>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' width='100'></ColumnDirective>
                <ColumnDirective field='TaskName' headerText='Job Name' width='250'></ColumnDirective>
                <ColumnDirective field='StartDate' format={formatOption}></ColumnDirective>
                <ColumnDirective field='Duration'></ColumnDirective>
                <ColumnDirective field='Progress'></ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>;
    }

ReactDOM.render(<App />, document.getElementById('root'));
