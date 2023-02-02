import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    ganttInstance;
    zoomIn() {
        this.ganttInstance.zoomIn();
    }
    zoomOut() {
        this.ganttInstance.zoomOut();
    }
    fitToProject() {
        this.ganttInstance.fitToProject();
    }
    render() {
        return (<div>
        <ButtonComponent onClick={this.zoomIn.bind(this)}>ZoomIn</ButtonComponent>
        <ButtonComponent onClick={this.zoomOut.bind(this)}>ZoomOut</ButtonComponent>
        <ButtonComponent onClick={this.fitToProject.bind(this)}>FitToProject</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => this.ganttInstance = gantt} taskFields={this.taskFields} height='450px'>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
