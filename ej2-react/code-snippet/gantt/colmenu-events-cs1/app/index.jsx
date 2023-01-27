import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort, Filter, ColumnMenu } from '@syncfusion/ej2-react-gantt';
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
    columnMenuOpen() {
        alert('columnMenuOpen event is Triggered');
    }
    columnMenuClick() {
        alert('columnMenuClick event is Triggered');
    }
    render() {
        return (<div>
        <GanttComponent dataSource={data} taskFields={this.taskFields} showColumnMenu={true} columnMenuOpen={this.columnMenuOpen} columnMenuClick={this.columnMenuClick} allowFiltering={true} allowSorting={true} splitterSettings={this.splitterSettings} height='450px' ref={gantt => this.ganttInstance = gantt}>
        <Inject services={[Sort, Filter, ColumnMenu]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
