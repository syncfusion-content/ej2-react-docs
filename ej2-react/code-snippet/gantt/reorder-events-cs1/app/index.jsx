import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Reorder } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    splitterSettings = {
        columnIndex: 5
    };
    columnDrop() {
        alert('columnDrop event is Triggered');
    }
    columnDragStart() {
        alert('columnDragStart event is Triggered');
    }
    columnDrag() {
        alert('columnDrag event is Triggered');
    }
    render() {
        return (<div>
        <GanttComponent dataSource={data} taskFields={this.taskFields} allowReordering={true} columnDragStart={this.columnDragStart} columnDrag={this.columnDrag} columnDrop={this.columnDrop} splitterSettings={this.splitterSettings} height='450px' ref={gantt => this.ganttInstance = gantt}>
        <Inject services={[Reorder]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
