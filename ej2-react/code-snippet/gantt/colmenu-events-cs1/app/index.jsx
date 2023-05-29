import { createElement } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort, Filter, ColumnMenu } from '@syncfusion/ej2-react-gantt';
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
    columnIndex : 5
};
    function columnMenuOpen(){
        alert('columnMenuOpen event is Triggered');
    }
    let ganttInstance;
    function columnMenuClick(){
        alert('columnMenuClick event is Triggered');
    }
        return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} showColumnMenu={true}
        columnMenuOpen= { columnMenuOpen } columnMenuClick= { columnMenuClick }
        allowFiltering={true} allowSorting={true}
        splitterSettings={splitterSettings} height = '450px' ref={gantt => ganttInstance = gantt}>
        <Inject services={[Sort, Filter, ColumnMenu]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));