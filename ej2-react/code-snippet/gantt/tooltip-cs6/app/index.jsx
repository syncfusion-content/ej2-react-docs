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
    tooltipTemplate(props) {
        return (<div>Duration : {props.duration}</div>);
    }
    ;
    template = this.tooltipTemplate;
    tooltipSettings = {
        editing: this.template.bind(this)
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} tooltipSettings={this.tooltipSettings} editSettings={this.editOptions} height='450px'>
            <Inject services={[Edit]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
