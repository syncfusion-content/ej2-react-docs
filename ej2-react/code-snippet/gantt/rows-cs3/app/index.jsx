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
    collapsing(args) {
        if (args.data.TaskID == 1)
            args.cancel = true;
    }
    ;
    expanding(args) {
        if (args.data.TaskID == 5)
            args.cancel = true;
    }
    ;
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} collapsing={this.collapsing.bind(this)} expanding={this.expanding.bind(this)} height='450px'>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('gantt'));
