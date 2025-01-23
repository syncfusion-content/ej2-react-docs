import { createElement } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Reorder } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  let ganttInstance;
  const splitterSettings = {
    columnIndex : 5
};
    function columnDrop(){
        alert('columnDrop event is Triggered');
    }
    function columnDragStart(){
       alert('columnDragStart event is Triggered');
    }
    function columnDrag(){
       alert('columnDrag event is Triggered');
    }
        return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} allowReordering={true}
        columnDragStart= { columnDragStart } columnDrag= { columnDrag } columnDrop= { columnDrop }
        splitterSettings={splitterSettings} height = '450px' ref={gantt => ganttInstance = gantt}>
        <Inject services={[Reorder]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));