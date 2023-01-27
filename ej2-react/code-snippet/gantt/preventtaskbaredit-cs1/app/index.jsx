import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit } from '@syncfusion/ej2-react-gantt';
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
    editOptions = {
        allowTaskbarEditing: true
    };
    taskbarEditing(args) {
        if (args.data.TaskID == 4) // We can't edit Task Id 4
            args.cancel = true;
    }
    ;
    queryTaskbarInfo(args) {
        if (args.data.TaskID == 6) {
            args.taskbarElement.className += ' e-preventEdit'; // Taskbar editing indicators are disabled
        }
    }
    ;
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} editSettings={this.editOptions} taskbarEditing={this.taskbarEditing.bind(this)} height='450px' queryTaskbarInfo={this.queryTaskbarInfo.bind(this)}>
        <Inject services={[Edit]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
