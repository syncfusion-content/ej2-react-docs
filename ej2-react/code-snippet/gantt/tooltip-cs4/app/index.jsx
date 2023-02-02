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
    tooltipTemplate(props) {
        return (<div>TaskID : {props.TaskID}</div>);
    }
    ;
    template = this.tooltipTemplate;
    tooltipSettings = {
        taskbar: this.template.bind(this)
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} tooltipSettings={this.tooltipSettings} height='450px'>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
