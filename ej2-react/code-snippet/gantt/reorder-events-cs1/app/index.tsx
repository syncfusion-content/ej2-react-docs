

import { createElement } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Reorder } from '@syncfusion/ej2-react-gantt';
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
  public splitterSettings: any = {
    columnIndex : 5
};
    public columnDrop(){
        alert('columnDrop event is Triggered');
    }
    public columnDragStart(){
       alert('columnDragStart event is Triggered');
    }
    public columnDrag(){
       alert('columnDrag event is Triggered');
    }
    render() {
        return (<div>
        <GanttComponent dataSource={data} taskFields={this.taskFields} allowReordering={true}
        columnDragStart= { this.columnDragStart } columnDrag= { this.columnDrag } columnDrop= { this.columnDrop }
        splitterSettings={this.splitterSettings} height = '450px' ref={gantt => this.ganttInstance = gantt}>
        <Inject services={[Reorder]} />
        </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


