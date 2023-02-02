import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
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
    onActionBegin(args) {
        if (args.requestType == 'beforeOpenAddDialog') {
            args.rowData.TaskName = 'Gantt';
            args.rowData.Progress = 70;
            args.rowData.ganttProperties.taskName = 'Gantt';
            args.rowData.ganttProperties.progress = 70;
        }
    }
    ;
    editOptions = {
        allowAdding: true
    };
    toolbarOptions = ['Add'];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} allowSelection={true} editSettings={this.editOptions} toolbar={this.toolbarOptions} height='450px' actionBegin={this.onActionBegin.bind(this)}>
            <Inject services={[Edit, Selection, Toolbar]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
