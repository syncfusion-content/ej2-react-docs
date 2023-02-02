import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    ganttInstance;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    editSettings = {
        allowEditing: true,
        allowTaskbarEditing: true
    };
    toolbarOptions = ['Edit', 'ZoomToFit'];
    actionComplete(args) {
        if ((args.action === "CellEditing" || args.action === "DialogEditing") && args.requestType === "save") {
            this.ganttInstance.dataSource = data;
            this.ganttInstance.fitToProject();
        }
    }
    ;
    taskbarEdited(args) {
        if (args) {
            this.ganttInstance.dataSource = data;
            this.ganttInstance.fitToProject();
        }
    }
    ;
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} editSettings={this.editSettings} actionComplete={this.actionComplete.bind(this)} taskbarEdited={this.taskbarEdited.bind(this)} height='450px' ref={gantt => this.ganttInstance = gantt}>
           <Inject services={[Toolbar, Edit, Selection]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
