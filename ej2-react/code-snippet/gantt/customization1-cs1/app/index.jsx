import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
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
    labelSettings = {
        leftLabel: 'TaskID',
        rightLabel: 'Task Name: ${taskData.TaskName}',
        taskLabel: '${Progress}%'
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} labelSettings={this.labelSettings} height='450px'>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
